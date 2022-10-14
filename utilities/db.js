const mongoose=require('mongoose')


const chatSchema=new mongoose.Schema({
    _id:String,
    nickname:String,
    profilePic:{
        type:String,
        default:'/user-default1.png'
    },
    chat:[{text:String,
        self:{
            type:Boolean,
            default:false
        },
        time:{
            type:Date,
            default:Date.now
        },
        unread:Boolean,
        }],
    }
)

const userSchema=new mongoose.Schema({
    username:String,
    nickname:String,
    profilePic:{
        type:String,
        default:'/user-default.png'
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