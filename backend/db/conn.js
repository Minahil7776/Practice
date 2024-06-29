const mongoose = require("mongoose");

// atlas url

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connection seccessfull");
}).catch((e)=>{
    console.log("Connection denied",e);
})