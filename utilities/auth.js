const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt=require('bcrypt');
const UserModel=require('./db.js')

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
        }
    res.redirect('/login');
    }

async function signUp(req,res,next) {
    try {
        const user=await UserModel.findOne({username:req.body.username})
        if (user) {
            req.session.message={signup:['Username already exist. Choose another username']}
            res.redirect('/signup')
        } else {
            let newUser = new UserModel({
                username:req.body.username,
                password:bcrypt.hashSync(req.body.password,12)
            })
            await newUser.save();
            req.session.message={signup:['Signup successful. Please Login']}
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
}

module.exports = {
    ensureAuthenticated: ensureAuthenticated,
    auth: auth,
    signUp:signUp
};