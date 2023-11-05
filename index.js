const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

router.get("/",(req,res) => {
    res.json("Hello World!")
})


app.listen(3000,()=> {
    console.log("app running on port 3000");
})