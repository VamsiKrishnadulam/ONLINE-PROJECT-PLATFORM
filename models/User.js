const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    Username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:false
    },
    firstname:{
        type:String,
        unique:false
    },
    lastname:{
        type:String,
        unique:false
    }
})
module.exports=mongoose.model('User',UserSchema)
