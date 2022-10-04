const mongoose=require('mongoose')

const chatSchema=new mongoose.Schema({
    _id:String,
    nickname:String,
    chat:[{text:String,
        time:{type:Date,
            default:Date.now}
        }],
    }
)

const userSchema=new mongoose.Schema({
    username:String,
    nickname:{
        type:String,
        default:function() {
            return this.username;
        }
    },
    password:String,
    google:{
        id:String,
        displayName:String,
    },
    facebook:{
        id:String,
        displayName:String,
    },
    private:[chatSchema]
})

module.exports = mongoose.model('User', userSchema);