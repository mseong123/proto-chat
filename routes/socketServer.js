function socketServer(io) {
    io.on('connection',(socket)=>{
        
        io.fetchSockets().then((allSockets)=>{
            
            
            const allSocketIDandNickname=allSockets.map(innerSocket=>{
                //don't include own socket details otherwise will render in own client
                if (innerSocket.request && innerSocket.request.user._id!==socket.request.user._id)
                    return {
                        _id:innerSocket.request.user._id,
                        nickname:innerSocket.request.user.nickname
                    }
            })
            socket.broadcast.emit('online',allSocketIDandNickname)
            
            console.log(allSocketIDandNickname)
            
        })
        
        //set up socket event listener/handler here cos socket instance only accessible here and only when they connect
        //socket.on('chat')
        

    }
    )
}



module.exports=socketServer;