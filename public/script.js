/*****SOCKET-IO******/
let socket = io();
let localUserInfo; //keep global info object (_id and nickname)

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
     
      
      allSockets.forEach((socket)=>{
        const user=document.getElementById("user"+socket._id)
        
        if (!user && socket._id!==localUserInfo._id) { 
          $('#user-list').append(
            $('<button>').addClass("list-group-item").attr('id','user'+socket._id).html(socket.nickname).append(
              $('<span>').addClass("badge badge-primary badge-pill").attr('id','badge'+socket._id).html('online')
            )
          )
        }
    
        else {
          $('#badge'+socket._id).removeClass('badge-primary').addClass('badge-success').html('online');
        }
      })
      
      
    })


/*****EVENT LISTENERS****/
function formOnClick(e) {
  e.preventDefault();
  
  const corresponding_id=e.currentTarget.id.match(/(?<=submit).*/)[0];
  const corresponding_nickname=$('#header-nickname').html();
  const msg = $('#input'+corresponding_id).val()
  
  socket.emit('private message',corresponding_id,corresponding_nickname,msg);

}





