const router = require("express").Router()

router.get("/usertest", (req, res)=>{
  res.send("user test")
})

router.post("/usertest", (req, res) => {
  
})
module.exports = router