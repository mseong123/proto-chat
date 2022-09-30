require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const http = require('http').createServer(app);
const MongoStore = require('connect-mongo');
const routes=require('./routes/routes')
const auth=require('./utilities/auth')
const mongoose=require('mongoose');
const { auth,ensureAuthenticated } = require('passport');

/*APP FILE STRUCTURE*/
/*
-index.js => used for initialisation of middlewares and db connection.
/routes
  -routes.js => to store all routes, currently only 1 route page. To separate the into diff modules if app gets more complex
/utilities
  -db.js => object modeller logic using mongooseJS
  -auth.js => set up passportJS middleware and strategies
*/

app.set('view engine', 'pug');
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize()); 
app.use(passport.session());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    dbName: process.env.SESSION_DB
    })
  })
);

mongoose.connect(process.env.MONGO_LOCAL,{dbName:'proto-chat'}).then(
  ()=>{
    console.log('Successfully connected to MongoDB')
  }).catch(
    (err)=>{
      console.log('Error connecting to MongoDB!');
        next('error connecting to DB '+err)
    })

auth(app)
routes(app)




http.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port ' + process.env.PORT || 3000);
});