const User = require("../models/user.model.js")
const userRegistration = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  }
  catch(e) {
    console.log(e)
    res.status(500).json("Server Error")
  } 
}

module.exports = {
  userRegistration,
}