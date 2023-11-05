const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

router.get("/",(req,res) => {
    res.send(<h2>hello world</h2>)
})


app.listen(3000,()=> {
    console.log("app running on port 3000");
})