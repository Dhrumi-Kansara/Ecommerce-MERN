const router = require("express").Router()

router.get("/usertest", (req, res)=>{
  res.send("user test")
})

router.post("/usertest", (req, res) => {
  // const username = req.body.username
  // console.log(username)
  // res.send(username)
  console.log("called")
  console.log(req)
  res.send("hello")
})
module.exports = router