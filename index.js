const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

app.get("/",(req,res) => {
    res.send("hello boras")
})

console.log("Consoled successfully after GET home invoked :)");

app.listen(3000,()=> {
    console.log("app running on port 3000");
})