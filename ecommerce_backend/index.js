const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})