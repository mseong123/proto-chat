# Proto Chat
Simple chat app built to mimic normal chat applications. Interface optimised for user experience. Application features stated in /app-info.
## Front-End
* Native HTML,CSS and JS (server-side rendered using PUG template engine). Pug compiled functions i.e. modalTemplate.js (compiled using Pug-CLI) are used in scripts on client side to ensure code reusability and to simplify development. 
* Bootstrap for styling.
* Socket.io on client side.
## Back-End
* NodeJS and ExpressJS.
* Socket.io for websocket interface to enable real time chat messaging.
* MongooseJS (Object Data Modelling and connector for MongoDB database).
## Database
* MongoDB Atlas (Document-based NoSQL database).
## Authentication
* PassportJS for OAuth 2.0 federated authentication (Google and Facebook login).
* Express-SessionJS for managing user sessions and authentication.

Development hours:2 weeks (70 hours)

[Live Version (Hosted on render.com)](https://proto-chat.onrender.com) *[create new user account or login using Google or Facebook]*
