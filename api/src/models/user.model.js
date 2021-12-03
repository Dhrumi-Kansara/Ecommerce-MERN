const mongoose = require("mongoose")
const CryptoJS = require("crypto-js")

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
}, 
  {timestamps: true}
)

UserSchema.pre("save", function(next) {
  try {
    let user=this
    let encrypted = CryptoJS.AES.encrypt(user.password, process.env.PASS_SEC);
    user.password = encrypted
    next()
  } catch(e) {
    return next(e)
  }
})
module.exports = mongoose.model("User", UserSchema)