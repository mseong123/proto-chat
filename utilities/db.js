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
        }
        }],
    }
)

const userSchema=new mongoose.Schema({
    username:String,
    nickname:{
        type:String,
        default:function() {
            if (this.username)
                return this.username
            else if (this.google)
                return this.displayName;
            else if (this.facebook)
                return this.displayName;
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