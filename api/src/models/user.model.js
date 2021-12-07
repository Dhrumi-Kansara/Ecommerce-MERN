const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
}, 
  {timestamps: true}
)

UserSchema.pre('save', function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
          return next(err);
      }
      user.password = hash;
      next();
  })
});

UserSchema.pre('updateOne', function (next) {
  let password = this.getUpdateOne().$set.password;
  if(!password) next()

  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
        return next(err);
    }
    this.getUpdate().$set.password = hash;
    next();
})
});

UserSchema.methods.validatePassword = (password, hashedPassword) => {
  let isValid = bcrypt.compareSync(password, hashedPassword);
  return isValid;
};

module.exports = mongoose.model("User", UserSchema)