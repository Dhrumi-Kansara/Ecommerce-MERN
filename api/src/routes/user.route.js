const router = require("express").Router()
const userController = require("../controller/user.controller")
const tokenVerification = require("../middleware/verifyToken")

router.put("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  userController.userUpdate)

module.exports = router