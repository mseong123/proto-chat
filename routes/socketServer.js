function socketServer(io) {
    io.on('connection',(socket)=>{
        
        //send user _id to each connected client for their usage when connected.
        socket.emit('_id',socket.request.user._id)

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
        
        
        //set up socket event listener/handler here cos socket instance only accessible here and only when they connect
        //socket.on('chat')
        

    }
    )
}



module.exports=socketServer;