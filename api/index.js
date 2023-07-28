const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000


const axios = require("axios")

app.get("/",(req,res)=>{
    res.json({
        name:"Hosting App inside api file",
        age:23
    })
})

app.listen(PORT,console.log("listening at port"+PORT))