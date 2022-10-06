const UserModel=require('../utilities/db.js')

function socketServer(io) {
    io.on('connection',(socket)=>{
        
        //send user info to each connected client for their usage when connected.
        socket.emit('userInfo',{
            _id:socket.request.user._id,
            nickname:socket.request.user.nickname,
        })


        /*to broadcast to all connected sockets all socket currently online(and let client side filter data) EVERYTIME
        when a socket connect. Use user._id info rather than socket.id because chat is user based and stored/persistent in db*/
        io.fetchSockets().then((allSockets)=>{
            const allSocketIDandNickname=allSockets.map(innerSocket=>{
                if (innerSocket.request) 
                return  {
                    _id:innerSocket.request.user._id,
                    nickname:innerSocket.request.user.nickname,
                    //socketID:innerSocket.id
                }
            })
            io.emit('online',allSocketIDandNickname)
        })
        
        
        //private message
        socket.on("private message", async function(corresponding_id, corresponding_nickname, msg) {
            try{
                //update own socket emitter db
                //First find if chat with corresponding user exists
                const chat=await UserModel.findOne().elemMatch('private',{_id:corresponding_id}).exec();
                //if exist, just update array of msg and timestamp
                
                if (chat) {
                    
                    await UserModel.findByIdAndUpdate(socket.request.user._id,
                        {$push:{'private.$[private].chat':{text:msg}}},
                        {"arrayFilters":[{'private._id':corresponding_id}]}
                        )
                    }
                //if not, create a corresponding_id object and populate with relevant data and msg

                //HAVENT TEST THIS YET, NEED ULTRAMAN
                 else {
                    await UserModel.findByIdAndUpdate(socket.request.user._id,
                        {$push:{'private':{chat:{
                            text:msg},
                            nickname:corresponding_nickname
                            }}
                        })
                    }
            } catch (err) {
                console.log('database error '+err)
                socket.next(err)
            }
            
            /*
            socket.join(another_id)
            socket.to(another_id).emit("private message", another._id, msg);
            */
          });
        

    }
    )
}



module.exports=socketServer;