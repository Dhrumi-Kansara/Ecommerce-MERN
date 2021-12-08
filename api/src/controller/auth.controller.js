const User = require("../models/user.model.js")
const response = require("../helper/response.js")
const jwt = require("jsonwebtoken")
const validation = require("../helper/validation")
const constant = require("../helper/constant")

const userRegistration = async (req, res) => {
  try {
    if(validation.isNotValidUserRegister(req.body)) return res.json(response.generate(true, constant.required, 400, null)) 
     let filter = [{ "username": req.body.username }, { "email": req.body.email } ]
    if(await User.findOne().or(filter))
      return res.json(response.generate(true, constant.usernameExist +" or " + constant.emailExist, 400, null)) 
 
    let user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    const newUser = new User(user)
    const savedUser = await newUser.save()
    res.json(response.generate(false, constant.success, 500, savedUser)) 
  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

const userLogin = async (req, res) => {
  try {
    if(validation.isNotValidUserLogin(req.body)) return res.json(response.generate(true, constant.required, 400, null)) 

    const user = await User.findOne({ username: req.body.username }) 
    if(!user) return res.json(response.generate(true, constant.wrongCredentials, 401, null)) 
    
    const isValid = user.validatePassword(req.body.password, user.password) 
    if(!isValid) return res.json(response.generate(true, constant.wrongCredentials, 401, null)) 
  
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SEC,
    { expiresIn: "3d"}
    )

    const {password, ...other} = user._doc
    res.json(response.generate(true, constant.success, 200, {...other, accessToken})) 
  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

module.exports = {
  userRegistration,
  userLogin
}