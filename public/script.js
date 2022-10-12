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
    
      allSockets.forEach((innerSocket)=>{
        const user=document.getElementById("user"+innerSocket._id)
        
        if (!user && innerSocket._id!==localUserInfo._id) { 
          //render pug template (using precompiled pug file from server side
          const listGroupItemHTML=listGroupItemTemplate({
            private:[innerSocket],
            status:'success'
          })
          $('#user-list').append(listGroupItemHTML)

          const modalHTML=modalTemplate({
            private:[{
              _id:innerSocket._id,
              socketID:innerSocket.socketID,
              nickname:innerSocket.nickname,
              chat:[]
            }]
          })
          $('body').append(modalHTML)

        }
    
        else {
          $('#submit'+innerSocket._id).attr('data-socket',innerSocket.socketID)
          $('#badge'+innerSocket._id).addClass('badge-success')
        }
      })
    /*switch off for now due to ux issue on mobile*/
    //modalFocus();
    read();

    })

    socket.on('offline',(_id)=>{
      const user = document.getElementById("user"+_id)
      const firstChatMessage=$('#chat'+_id).find('.card:first')
      if (user && firstChatMessage[0]) {
        $("#badge"+_id).removeClass('badge-success');
      }
      else {
        $("#user"+_id).remove();
        $("chat"+_id).on('hidden.bs.modal',function(){
          $("#chat"+_id).remove();
        })
        
      }
    })

    socket.on('read',(_id,done)=>{
      
      const unreadMessage=$('#unreadMessage'+_id)
      const unreadBadge=$('#unreadBadge'+_id)

      unreadBadge.text('')
      //if updated in db, done===true remove all unread elements
      if (done) {
        
          if (unreadMessage.hasClass('font-weight-bold')) 
            unreadMessage.removeClass('font-weight-bold')
        
          if (!unreadBadge.hasClass('d-none')) 
            unreadBadge.addClass('d-none')

      }
    })

    //one handler for both own and corresponding msg
    socket.on('private message',(_id,self,msg)=>{
      let lastDate=new Date($('#chat'+_id).find('.modal-body .date:last').text());
      let currentDate=new Date(new Date().getDate()+' '+new Date().toLocaleString('default', { month: 'long' }).substring(0,3)+' '+new Date().getFullYear().toString().substr(-2));
      let chatHTML;
      let dateHTML=cardDateTemplate({
        currentDate
      })

      if (self) {
        chatHTML=cardSelfTemplate({
          value:{
            text:msg,
            time:new Date()}
        })
        
      } else {
        chatHTML=cardNotSelfTemplate({
          value:{
            text:msg,
            time:new Date()}
        })
      }

      if (currentDate.getTime()===lastDate.getTime()) {
        //if last chat falls on same day, no new day card
        $('#chat'+_id).find('.modal-body').append(chatHTML)
      } else {
        //else append a new date card
        $('#chat'+_id).find('.modal-body').append(dateHTML)
        $('#chat'+_id).find('.modal-body').append(chatHTML)
      }

    
    
    if (!self) {
      const unreadMessage=$('#unreadMessage'+_id)
      const unreadBadge=$('#unreadBadge'+_id)

      unreadMessage.text(msg)
      if (!unreadMessage.hasClass('font-weight-bold')) 
      unreadMessage.addClass('font-weight-bold')
  
      if (unreadBadge.hasClass('d-none')) {
        unreadBadge.removeClass('d-none')
      }
      let count=parseInt(unreadBadge.text()) || 0

      if (!unreadBadge.hasClass('d-none')) {
        unreadBadge.text(count +1)
      }

    }
    
      

  })


/*****EVENT LISTENERS****/
function formOnClick(e) {
  e.preventDefault();
  //do the below because formOnSubmit triggers a different e.target when using jquery to active .click();
  let target=e.currentTarget || e.target
  const corresponding_socket_id=$(target).attr('data-socket');
  const corresponding_id=target.id.match(/(?<=submit).*/)[0];
  const corresponding_nickname=$('#chat'+corresponding_id).find('#header-nickname').text().trim();
  
  const msg = $('#input'+corresponding_id).val()
  
  socket.emit('private message',corresponding_socket_id,corresponding_id,corresponding_nickname,msg);

}

function formOnSubmit(e) {
  e.preventDefault()

  const corresponding_id=e.currentTarget.id.match(/(?<=form).*/)[0];
  
    $("#submit"+corresponding_id).click();
    $("#input"+corresponding_id).val('')
}

//set all modals to auto focus on text input when open
function modalFocus() {
  $('.modal').each(function(i,element){
    const _id=$(element).attr('id').match(/(?<=chat).*/)[0]
    $(element).on('shown.bs.modal', function () {
      let modalBody=$(element).find('.modal-body')
      modalBody.animate({ scrollTop: modalBody.height()}, 500);
      $("#input"+_id).focus();
    })
  })
}

/*switch off for now due to ux issue on mobile*/
//modalFocus();

//set all modals to send socket event 'read' when modal is clicked and server will update all chat entries to read
function read() {
  $('.modal').each(function(i,element){
    const _id=$(element).attr('id').match(/(?<=chat).*/)[0]
    
    $(element).on('shown.bs.modal', function () {
      socket.emit('read',_id)
    })
  })
}

read();







