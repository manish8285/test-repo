const express = require("express")
const app = express()



const axios = require("axios")

app.get("/api/",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(data=>{
        res.send(data.data)
    }).catch(e=>{
        console.log(e)
        res.status(401).send("something sent wrong")
    })

})





app.listen(8000,console.log("listening at port 8000"))