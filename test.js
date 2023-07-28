fetch = require("fetch")
const url = "https://jsonplaceholder.typicode.com/users"



fetch(url,{}).then(res=>res.json()).then(data=>console.log(data)).catch(e=>console.log(e))

