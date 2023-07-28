const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000


const axios = require("axios")

app.get("/",(req,res)=>{
    res.json({
        name:"Manish",
        age:23
    })
})

app.get("/api/",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(data=>{
        res.send(data.data)
    }).catch(e=>{
        console.log(e)
        res.status(401).send("something sent wrong")
    })

})





app.listen(PORT,console.log("listening at port"+PORT))