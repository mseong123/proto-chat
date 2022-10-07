const UserModel=require('../utilities/db.js')

function socketServer(io) {
    io.on('connection',(socket)=>{
        
        //send user info to each connected client for their usage when connected.
        socket.emit('userInfo',{
            _id:socket.request.user._id,
            nickname:socket.request.user.nickname,
        })

        /*to broadcast to all connected sockets all socket currently online(and let client side filter data) EVERYTIME
        when a socket connect.*/
        io.fetchSockets().then((allSockets)=>{
            const allSocketIDandNickname=allSockets.map(innerSocket=>{
                if (innerSocket.request) 
                return  {
                    _id:innerSocket.request.user._id,
                    /*need socketID only for purpose of emitting LIVE private messaging, otherwise only DB operations take place when
                    offline chat happens using _id and nickname.*/
                    socketID:innerSocket.id,
                    nickname:innerSocket.request.user.nickname,
                }
            })
            io.emit('online',allSocketIDandNickname)
        })

        //when a socket disconnect, do the same thing
        socket.on('disconnect',()=>{
            io.emit('offline',socket.request.user._id)
        })

        
        
        
        //private message
        socket.on("private message", async function(corresponding_socket_id,corresponding_id, corresponding_nickname, msg) {

            try{
                //update own socket emitter user details in db
                //First find if chat with corresponding user already exists
                const ownChat=await UserModel.findOne({_id:socket.request.user._id}).elemMatch('private',{_id:corresponding_id}).exec();
                //if exist, just update array of msg,self field and timestamp
                
                if (ownChat) {
                    
                    await UserModel.findByIdAndUpdate(socket.request.user._id,
                        {$push:{'private.$[private].chat':{text:msg,self:true}}},
                        {"arrayFilters":[{'private._id':corresponding_id}]}
                        )
                    }


                //if not, create a new object with corresponding _id and nickname and populate with chat data
                 else {
                    await UserModel.findByIdAndUpdate(socket.request.user._id,
                        {$push:{'private':{
                            _id:corresponding_id,
                            nickname:corresponding_nickname,
                            chat:{
                                text:msg,
                                self:true
                                }
                            }}
                        })
                    }
                //After that update corresponding user's detail in db and do the same thing
                const correspondingChat=await UserModel.findOne({_id:corresponding_id}).elemMatch('private',{_id:socket.request.user._id}).exec();
                if (correspondingChat) {
                    
                    await UserModel.findByIdAndUpdate(corresponding_id,
                        {$push:{'private.$[private].chat':{text:msg,self:false}}},
                        {"arrayFilters":[{'private._id':socket.request.user._id}]}
                        )
                    }
                else {
                    await UserModel.findByIdAndUpdate(corresponding_id,
                        {$push:{'private':{
                            _id:socket.request.user._id,
                            nickname:socket.request.user.nickname,
                            chat:{
                                text:msg,
                                self:false
                                }
                            }}
                        })
                    }
               
                //if db entry succeed only then emit message to socket emitter
                console.log(socket.id)
                socket.emit('private message',corresponding_id,true,msg)
                //and also recipient
                console.log(corresponding_socket_id)
                socket.to(corresponding_socket_id).emit('private message',socket.request.user._id,false,msg)
                
            } catch (err) {
                console.log('database error '+err)
                socket.next(err)
            }
            


          });
        

    }
    )
}



module.exports=socketServer;