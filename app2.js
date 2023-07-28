const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/userdb").then(()=>{
    console.log("connection successfully")
}).catch((e)=>{
    console.log(e)
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    phone:Number
})

const User =mongoose.model("User",userSchema);

User.find().then(data=>{
    console.log(data)
}).catch(e=>console.log(e))




app.get("/test",(req,res)=>{
    res.send("This is test end point")
})


app.listen(8001,()=>{
    console.log("listening at the port 8001")
})