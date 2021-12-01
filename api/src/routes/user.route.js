const router = require("express").Router()

router.get("/usertest", (req, res)=>{
  res.send("user test")
})

router.post("/usertest", (req, res) => {
  const username = req.body.username
  console.log(username)
  res.send("your name is "+username)
})
module.exports = router