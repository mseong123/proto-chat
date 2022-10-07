/*****SOCKET-IO******/
let socket = io();
let localUserInfo; //keep global info object (_id and nickname)
console.log(socket)

//set up the only error listener for server errors
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

socket.on('connect',()=>{
  console.log('connect')
})

socket.on('userInfo',(userInfo)=>{
  localUserInfo=userInfo
})

socket.on('disconnect',()=>{
  /*socket.disconnect() is extremely important. For WHATEVER REASON (ie client script error - see below* for writeup or other server errors) 
  which result in socket connection dropping, socket.io's default behavior for client is to create new socket and reconnecting to server. 
  For my app, this will mess up io('connection') event resulting in infinite loop (hence messing up io.fetchSockets as everytime a new 
    connection made, io.fetchSockets will add more socket instance and also since old socket is not socket.disconnect().

  Hence socket.disconnect under disconnect event does:
  1) disconnect existing socket in server
  2) disable 'default' behavior of socket.io since it's a deliberate disconnect
  */

  socket.disconnect();
  console.log('disconnect')}
  )

  
  socket.on('online',(allSockets)=>{
    /*ie *if i have a script error here,socket.io can't proceed and execute and will attempt new connection to server then server will send
    send something on 'connection' using the 'online' event and reach here and script executes and error again and the infinite loop repeats! 
    Hence use socket.disconnect above.
    */
    
      console.log(allSockets)
     
      
      allSockets.forEach((innerSocket)=>{
        const user=document.getElementById("user"+innerSocket._id)

        if (!user && innerSocket._id!==localUserInfo._id) { 
          //render pug template (using precompiled pug file from server side
          const html=listGroupItemTemplate({
            private:[innerSocket],
            status:{
              msg:'online',
              class:'success'}
          })
          $('#user-list').append(html)
        }
    
        else {
          $('#submit'+innerSocket._id).attr('data-socket',innerSocket.socketID)
          $('#badge'+innerSocket._id).removeClass('badge-primary').addClass('badge-success').html('online');
        }
      })
      
      
    })

    //one handler for both own and corresponding msg
    socket.on('private message',(_id,self,msg)=>{
      let html;
      console.log(msg)
      if (self) {
        html=cardSelfTemplate({
          value:{
            text:msg,
            time:new Date()}
        })
        console.log(html)
    } else {
      html=cardNotSelfTemplate({
        value:{
          text:msg,
          time:new Date()}
      })
      console.log(html)
    }
    $('#chat'+_id).find('.modal-body').append(html)
  })


/*****EVENT LISTENERS****/
function formOnClick(e) {
  e.preventDefault();
  
  const corresponding_socket_id=$(e.currentTarget).attr('data-socket');
  const corresponding_id=e.currentTarget.id.match(/(?<=submit).*/)[0];
  const corresponding_nickname=$('#header-nickname').html();
  
  const msg = $('#input'+corresponding_id).val()
  
  socket.emit('private message',corresponding_socket_id,corresponding_id,corresponding_nickname,msg);

}





