const mongoose = require ("mongoose");
const user_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true,
        unique:true
    },
    excerpt:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true
    },
    PublicationDate:{
        type:Date,
        require:true
    }
    
})

const  user = mongoose.model("UserData",user_schema);
module.exports =  user;

