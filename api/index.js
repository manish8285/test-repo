const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const mongoose = require("mongoose")
const URL2 = "mongodb+srv://ermaanish:manish_singh@cluster0.5okciwd.mongodb.net/?retryWrites=true&w=majority" 

mongoose.connect(URL2,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to databases")
}).catch(e=>console.log("connection to database failed"))


// const userSchema= mongoose.Schema({name:{
//     type:String,
//     required:true,
//     minlength:3
// },
//     email:{
//         type:String,
//         required:true,
//         unique:[true,"Email id is already present"],
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Invalid Email")
//             }
//         }
//     },
// phone:{
//     type:Number,
//     min:10,
//     required:true,
//     unique:true
// }

// })

//  const personModel =new mongoose.model("person",userSchema)
 

// app.post("/person",(req,res)=>{
//     const p1 =new personModel(req.body)
//     p1.save().then(()=>{
//         res.status(200).send("person saved successfully")
//     }).catch(()=>{
//         res.status(400).send("Something went wrong")
//     })
// })

// app.get("/persons",(req,res)=>{
    
//     personModel.find({}).then((data)=>{
//         res.json(data)
//     }).catch(e=>{
//         res.status(401).send("Something went wrong")
//     })
// })



const axios = require("axios")

app.get("/",(req,res)=>{
    res.json({
        name:"Hosting App inside api file",
        age:23
    })
})

app.listen(PORT,console.log("listening at port"+PORT))