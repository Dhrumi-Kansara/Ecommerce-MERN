const User = require("../models/user.model.js")
const response = require("../helper/response.js")
const validation = require("../helper/validation")
const constant = require("../helper/constant")

const userUpdate = async (req, res) => {
  try {
    if(validation.isNotValidUserUpdate(req.params.id)) return res.json(response.generate(true, constant.required, 500, null)) 

    const updatedUser = await User.updateOne( 
      { _id: req.params.id }, 
      { $set: req.body },
      { new: true }
    );
    res.json(response.generate(false, constant.success, 200, updatedUser)) 

  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

module.exports = {
  userUpdate
}