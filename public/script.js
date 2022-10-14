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
              profilePic:innerSocket.profilePic,
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
    //re-attach modal handlers for newly rendered modals
    modalShown();

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

    socket.on('read',(_id)=>{
      
      const unreadMessage=$('#unreadMessage'+_id)
      const unreadBadge=$('#unreadBadge'+_id)

      unreadBadge.text('')
      //remove all unread elements
          if (unreadMessage.hasClass('font-weight-bold')) 
            unreadMessage.removeClass('font-weight-bold')
        
          if (!unreadBadge.hasClass('d-none')) 
            unreadBadge.addClass('d-none')
      }
    )

    socket.on('nickname',(_id,new_nickname)=>{
      $('.chat-nickname').find('h5').text(new_nickname)
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
    
    const unreadMessage=$('#unreadMessage'+_id)
    unreadMessage.text(msg)

    //if message from corresponding update and show unread elements (unreadMessage and unreadBadge)
    if (!self) {
      
      const unreadBadge=$('#unreadBadge'+_id)
      let count=parseInt(unreadBadge.text()) || 0

      console.log(parseInt(unreadBadge.text()))

      if (!unreadMessage.hasClass('font-weight-bold')) 
      unreadMessage.addClass('font-weight-bold')
  
      if (unreadBadge.hasClass('d-none')) {
        unreadBadge.removeClass('d-none')
      }
      unreadBadge.text(count+=1)
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
  const modalBody=$('#chat'+corresponding_id).find('.modal-body')
  
  const msg = $('#input'+corresponding_id).val()
  $("#input"+corresponding_id).val('')
  modalBody.animate({ scrollTop: modalBody[0].scrollHeight}, 300);
  socket.emit('private message',corresponding_socket_id,corresponding_id,corresponding_nickname,msg);
}

function nicknameFormOnClick(e) {
  e.preventDefault()
  
  let target=e.currentTarget || e.target
  const _id=target.id.match(/(?<=nicknameSubmit).*/)[0];
  const new_nickname=$('#newNickname'+_id).val();
  $("#newNickname"+_id).val('')
  socket.emit('nickname',_id,new_nickname)
}

function formOnSubmit(e) {
  e.preventDefault()
  
  const corresponding_id=e.currentTarget.id.match(/(?<=form).*/)[0];
  const modalBody=$('#chat'+corresponding_id).find('.modal-body')
    $("#submit"+corresponding_id).click();
    $("#input"+corresponding_id).val('');
    modalBody.animate({ scrollTop: modalBody[0].scrollHeight}, 300);
    
}

function nicknameFormOnSubmit(e) {
  e.preventDefault()
  
  const _id=e.currentTarget.id.match(/(?<=nicknameForm).*/)[0];
  
    $("#nicknameSubmit"+_id).click();
    $("#newNickname"+corresponding_id).val('');
}




function modalShown() {
  $('.modal').each(function(i,element){
    const _id=$(element).attr('id').match(/(?<=chat).*/)[0]
    
    $(element).on('shown.bs.modal', function () {
      //all modals to send socket event 'read' when modal is clicked and server will update all chat entries to read
      socket.emit('read',_id)
      //auto scroll to bottom when modal is open
      let modalBody=$(element).find('.modal-body')
      modalBody.animate({ scrollTop: modalBody[0].scrollHeight}, 300);
      console.log(modalBody.height())
      //auto focus on text input when open. Switch off for now due to ux issue on mobile
      //$("#input"+_id).focus();
    })
  })
}

modalShown();







