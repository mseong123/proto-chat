require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const http = require('http').createServer(app);
const MongoStore = require('connect-mongo');
const routes=require('./routes/routes')
const { auth } = require('./utilities/auth.js');
const socketServer=require('./routes/socketServer')
const mongoose=require('mongoose');

const io = require('socket.io')(http);


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

const sessionMiddleware=session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    dbName: process.env.SESSION_DB
    })
  })
app.use(sessionMiddleware);
app.use(passport.initialize()); 
app.use(passport.session());

/*Created my own middleware which attach req.user to socket instance (socket.request.user) and mimick whats in 
https://github.com/jfromaniello/passport.socketio/issues/148 which wraps around session and passport. Reason why i don't
use that is don't quite understand detailed mechanics of it other than being able to do what my middleware do below. Also
not sure how session would work under websocket (need to explore further next time). Also attach next from app middleware for 
error handling and attach it under socket instance. */
app.use((req,res,next)=>{
  io.use((socket,socketNext)=>{
    socket.request.user=req.user;
    socket.next=next;
    socketNext()
  })
  next();
})

mongoose.connect(process.env.MONGO_URI,{dbName:'proto-chat'}).then(
  ()=>{
    console.log('Successfully connected to MongoDB')
  }).catch(
    (err)=>{
      console.log('Error connecting to MongoDB!');
        
    })

auth(app)
routes(app)
socketServer(io)

http.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port ' + process.env.PORT || 3000);
});