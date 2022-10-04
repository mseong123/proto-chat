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

/*The following middleware wrapper codes ALL HAVE TO BE INCLUDED (as per passportsocketio doc) in order to access req.user data under 
socket.request during websocket request/response. Spent alot of time and can't really do anything else. Don't really understand mechanics under the hood but 
when i tried to set up my own socket.io middleware to put req.user data under socket instance, socket can't connect from client at all (and
  as a result keep trying to reconnect). 

*/
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware)) //have to include all, ie if i leave this wrapper out doesn't work. 
io.use(wrap(passport.initialize()))
io.use(wrap(passport.session()));

//can't think of many use case for the below, ie only 1 i can think of is clear cookie during chat session.
io.use((socket, next) => {
  if (socket.request.user) {
    next();
  } else {
    next(new Error('unauthorized'))
  }
});

//until here

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