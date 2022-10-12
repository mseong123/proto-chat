const mongoose=require('mongoose')


const chatSchema=new mongoose.Schema({
    _id:String,
    nickname:String,
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