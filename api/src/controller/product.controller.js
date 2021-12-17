const User = require("../models/user.model.js")
const Product = require("../models/product.model.js")
const response = require("../helper/response.js")
const validation = require("../helper/validation")
const constant = require("../helper/constant")

const createProduct = async (req, res) => {
  try {
    if(validation.isNotValidCreateProduct(req.body)) return res.json(response.generate(true, constant.required, 500, null)) 

    const newProduct = new Product(req.body)
    const savedProduct = await newProduct.save()
    res.json(response.generate(false, constant.success, 200, savedProduct)) 

  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}


const updateUser = async (req, res) => {
  try {
    if(validation.isNotValidUserUpdate(req.params.id)) return res.json(response.generate(true, constant.required, 500, null)) 

    const updatedUser = await User.findOneAndUpdate( 
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

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json(response.generate(false, constant.success, 200, null)) 

  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

const fetchUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    const {password, ...other} = user._doc

    res.json(response.generate(false, constant.success, 200, {user: other})) 

  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

const fetchAllUsers = async (req, res) => {
  try {
    const query = req.query.new

    const users = query
    ? await User.find().sort({_id: -1}).limit(1)
    : await User.find()
    res.json(response.generate(false, constant.success, 200, users)) 
  }
  catch(e) {
    console.log(e)
     res.json(response.generate(true, constant.serverError, 500, null)) 
  } 
}

const fetchUserStats = async (req, res) => {
  try {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    const data = await User.aggregate([
      { $match: {createdAt: { $gte:  lastYear  }}},
      { $project: {
        month: {$month: '$createdAt'}
      }},
      {
        $group: {
          _id: "$month",
          total: { $sum: 1}
        }
      }
    ])
    res.json(response.generate(false, constant.success, 200, data)) 


  } catch(e) {
    console.log(e)
    res.json(response.generate(true, constant.serverError, 500, null)) 
  }
}

module.exports = {
  createProduct,
  updateUser,
  deleteUser,
  fetchUser,
  fetchAllUsers,
  fetchUserStats
}