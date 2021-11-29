const express = require('express')
const mongoose = require('mongoose')
const env = require("dotenv")
const app = express()
env.config()

app.get("/api/test", (req, res)=>{
  console.log(" test is successfull ")
})

mongoose.connect(process.env.MONGO_URL) 
        .then(()=>console.log("Database connected successfully"))
        .catch((e)=>console.log(e))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})