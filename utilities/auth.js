require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const bcrypt=require('bcrypt');
const UserModel=require('./db.js')

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
        }
    req.session.message={login:'Please authenticate'}//message handler
    res.redirect('/login');
    }

async function signUp(req,res,next) {
    try {
        const user=await UserModel.findOne({username:req.body.username})
        if (user) {
            req.session.message={signup:'Username already exist. Choose another username'}//message handler
            res.redirect('/signup')
        } else {
            let newUser = new UserModel({
                username:req.body.username,
                password:bcrypt.hashSync(req.body.password,12)
            })
            await newUser.save();
            req.session.message={signup:'Signup successful. Please Login'}//message handler
            res.redirect('/login')
        }
    } catch(err) {
        next(err)
    }
}

function auth(app) {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async(id, done) => {
        try {
            const user = await UserModel.findOne({ _id: id });
            done(null, user);
        } catch(err) {
            console.log('database error '+err)
        }
    });

    passport.use(new LocalStrategy({passReqToCallback: true},
        async function (req,username, password, done) {
            try {
                
                const user=await UserModel.findOne({ username: username })
                if(!user) {
                    //use own message handler
                    req.session.message={login:'User does not exist'}
                    return done(null,false)
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    //use own message handler
                    req.session.message={login:'Incorrect Password'}
                    return done(null,false)
                }
                return done (null,user)

            } catch(err) {
                console.log('database error '+err)
                done(err)
            }    
        }
    ));

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://proto-chat.onrender.com/auth/google/callback',
        scope: [ 'profile' ],
        state: true
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
            console.log(profile)
            const user=await UserModel.findOne({
                'google.id':profile.id
            })
            
            if (!user) {
                // The account at Google has not logged in to this app before.  Create a
                // new user record and associate it with the Google account.
                let user=UserModel({google:{
                    id:profile.id,
                    displayName:profile.displayName,
                }})
                await user.save();
                return done(null,user)
            } else {
                return done(null,user)
            }

        } catch(err) {
            console.log('database error '+err)
            done(err)
        }    
    })
    )

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: 'https://proto-chat.onrender.com/auth/facebook/callback',
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
            console.log(profile)
            const user=await UserModel.findOne({ 
                'facebook.id':profile.id
            }})

            if (!user) {
                // The account at Facebook has not logged in to this app before.  Create a
                // new user record and associate it with the Facebook account.
                let user=UserModel({facebook:{
                    id:profile.id,
                    displayName:profile.displayName,
                }})
                await user.save();
                return done(null,user)
            } else {
                return done(null,user)
            }

        } catch(err) {
            console.log('database error '+err)
            done(err)
        }    
    })
    )


}

module.exports = {
    ensureAuthenticated: ensureAuthenticated,
    auth: auth,
    signUp:signUp
};