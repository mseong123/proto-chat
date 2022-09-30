const passport = require('passport');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose')
const User=require('./db.js')

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
        }
    res.redirect('/login');
    }



function auth(app) {

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async(id, done) => {
        try {
            const user = await mongoose.findOne({ _id: id });
            done(null, user);
        } catch(err) {
            console.log('database error '+err)
        }
    });

    passport.use(new LocalStrategy(
        async function (username, password, done) {
            try {
                const user=await User.findOne({ username: username })
                if(!user) done(null,false, {message:'User does not exist!'})
                if (!bcrypt.compareSync(password, user.password)) done(null,false,{message:'Incorrect Password'})
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
    auth: auth
};