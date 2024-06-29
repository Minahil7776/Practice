const express = require("express");
const Admin = require("../db/admin-schema");
const router = express.Router();

router.get("/articles", async (req,res)=>{
    try{
        const admin = await Admin.find();
        res.json(admin);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
module.exports = router;