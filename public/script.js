
  /*global io*/
 
let socket = io();
//socket.on('hello',(goodbye)=>console.log('goodbye'))

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});


socket.on('online',(allSocketIds)=>{

  console.log(allSocketIds)
  
  /*
  allSocketIds.forEach(id=>{
    const user=document.getElementById('user'+id)
    if (!user) {
      const badge = document.createElement("span").setAttribute('id','online'+id);
      badge.classList.add("badge","badge-primary","badge-pill");
      const user = document.createElement("button").setAttribute('id','user'+id);
      user.classList.add("list-group-item");
      user.appendChild(badge);
      document.getElementById('user-list').appendChild(user);
    }
    else {
      document.getElementById('online'+id).innerHTML='online'
    }
  })
  
  */
  
  
    
})




