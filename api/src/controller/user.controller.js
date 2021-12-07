const User = require("../models/user.model.js")
const response = require("../helper/response.js")

const userUpdate = async (req, res) => {
  try {
    if(req.body.password) {}
    const updatedUser = await User.updateOne( 
      { _id: req.body.id }, 
      { $set: req.body },
      { new: true }
    );
    res.json(response.generate(false, "Update Successfull", 200, updatedUser)) 

  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, "Server Error", 500, null)) 
  } 
}

module.exports = {
  userUpdate
}