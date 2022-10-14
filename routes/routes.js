const passport = require('passport');
const { ensureAuthenticated , signUp } = require('../utilities/auth.js');
const pug=require('pug')

function routes(app) {
    app.get('/',(req,res)=>{
        res.redirect('/login')
    })
    
    /*use my own (very convenient!) message handler instead of passportJS provided (which is clunky and I havent research enough to 
        make it work). Put all messages (ie for login and signup route) under req.session.message(not messages as this is used by passportJS 
        for failureMessage option). Clear message property after every render so when client manually navigate to routes, 
        previous message don't appear.
    */

    app.get('/login',(req,res,next)=>{
        let message=req.session.message && req.session.message.login? req.session.message.login:null;
        res.render('login',{status:message?'alert-info':null,message},function(err,html){
            if (err) next(err)
            if (req.session.message && req.session.message.login)
                req.session.message.login=null; //clear message handler to prevent unexpected behaviours
            res.send(html);
        })
    })

    app.get('/auth/google',passport.authenticate('google'));

    app.get('/auth/google/callback',passport.authenticate('google', { 
        failureRedirect: '/login'
     }), (req, res) => {
        req.session.message={chat:'Successfully Logged In with Google'} /*put message handler here and not in passport verify function because 
        somehow it destroys the property i set for message when cb is called*/
        res.redirect('/chat')
    });

    app.get('/auth/facebook',passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',passport.authenticate('facebook', { 
        failureRedirect: '/login'
     }), (req, res) => {
        req.session.message={chat:'Successfully Logged In with Facebook'} /*put message handler here and not in passport verify function because 
        somehow it destroys the property i set for message when cb is called*/
        res.redirect('/chat')
    });

    
    app.get('/signup',(req,res,next)=>{
        let message=req.session.message && req.session.message.signup? req.session.message.signup:null;
        res.render('signup',{status:message?'alert-info':null,message},function(err,html){
            if (err) next(err)
            if (req.session.message && req.session.message.signup)
                req.session.message.signup=null; //clear message handler to prevent unexpected behaviours
           
            res.send(html);
        })
    })

    app.get('/chat',ensureAuthenticated,(req,res,next)=>{
        
        let message=req.session.message && req.session.message.chat? req.session.message.chat:null;
        res.render('chat',{
            message,
            _id:req.user._id,
            nickname:req.user.nickname,
            profilePic:req.user.profilePic,
            private:req.user.private,
            
        },function(err,html){
            if (err) next(err)
            if (req.session.message && req.session.message.chat)
                req.session.message.chat=null; //clear message handler to prevent unexpected behaviours
            res.send(html);
        })
    })

    app.get('/app-info',(req,res,next)=>{
        
        res.render('app-info',function(err,html){
            if (err) next(err)
            res.send(html);
        })
    })

    app.get('/logout',(req,res,next)=>{
        req.logout(function(err){
            if (err) next(err) 
            req.session.message={login:'Logout.'} //message handler
            res.redirect('/login')
        })
        
    })

    app.post('/login',passport.authenticate('local',{
        failureRedirect:'/login'
    }),function(req, res) {
        req.session.message={chat:'Successfully Logged In'} /*put message handler here and not in passport verify function because 
        somehow it destroys the property i set for message when cb is called*/
        res.redirect('/chat')
    })
    

    app.post('/signup',signUp)

    //routes catch all
    app.use('/',(req,res)=>{
        res.status(404).send("Sorry can't find that!")
    })
    
    //error handler
    app.use((err,req,res,next)=>{
        console.error(err.stack)
        res.status(500).send('Uh Oh! Error occured! '+err.stack)
    })
}

module.exports=routes;
