const mongoose=require('mongoose')
const moment = require('moment-timezone');
const dateMalaysia = moment.tz(Date.now(), "Asia/Malaysia");

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
            default:dateMalaysia
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
                return this.google.displayName;
            else (this.facebook)
                return this.facebook.displayName;
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