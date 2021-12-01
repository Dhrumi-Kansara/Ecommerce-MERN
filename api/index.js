const express = require('express')
const mongoose = require('mongoose')
const env = require("dotenv")
const userRoutes = require("./src/routes/user.route.js")
const PORT = process.env.PORT || 5000
const app = express()
env.config()

app.use(express.json())

app.get("/api/test", (req, res)=>{
  console.log(" test is successfull ")
})

mongoose.connect(process.env.MONGO_URL) 
        .then(()=>console.log("Database connected successfully"))
        .catch((e)=>console.log(e))

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
}) 

