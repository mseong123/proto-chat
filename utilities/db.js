const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    google:{
        id:String,
        displayName:String,
    },
    facebook:{
        id:String,
        displayName:String,
    }
})

module.exports = mongoose.model('User', userSchema);