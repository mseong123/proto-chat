function routes(app) {
    app.get('/',(req,res)=>{
        res.redirect('/login')
    })
    
    app.get('/login',(req,res)=>{
        res.render('login')
    })
    
    app.get('/signup',(req,res)=>{
        res.render('signup')
    })
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
