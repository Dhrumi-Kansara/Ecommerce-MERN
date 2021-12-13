const router = require("express").Router()
const userController = require("../controller/user.controller")
const tokenVerification = require("../middleware/verifyToken")

router.put("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  userController.userUpdate)
router.delete("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  userController.userDelete)
router.get("/find/:id", tokenVerification.verifyTokenAndAdmin ,  userController.usersFind)


module.exports = router