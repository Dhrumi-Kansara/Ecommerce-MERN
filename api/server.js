const express = require('express')
const mongoose = require('mongoose')
const env = require("dotenv")
const userRoutes = require("./src/routes/user.route.js")
const authRoutes = require("./src/routes/auth.route.js")
const productRoutes = require("./src/routes/product.route")
const cartRoutes = require("./src/routes/cart.route.js")
const orderRoutes = require("./src/routes/order.route.js")


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
app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
}) 

