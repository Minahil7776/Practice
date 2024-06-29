const express = require("express")
const router = express.Router();
const User = require("../db/userSchema");

router.post("/",(req,res)=>{
    const {name,email,password} = req.body;
    if(!name||!email||!password){
        return res.status(404).json({message:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then(user=>{
        if(user){
            res.status(404).json({message:"Email already exisit"})
        }
        else{
            const newuser = new User({name:name,email:email,password:password})
            newuser.save().then(result=>res.json("Account Created"))
            .catch(err=>res.json(err))
        }
    })
    .catch(error=>res.json(error))
})

module.exports = router;