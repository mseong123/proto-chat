const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    google:{
        id:String,
        displayName:String,
        photos:String
    },
    facebook:{
        id:String,
        displayName:String,
        profileURL:String
    }
})

module.exports = mongoose.model('User', userSchema);