const router = require("express").Router()
const userController = require("../controller/user.controller")
const tokenVerification = require("../middleware/verifyToken")

router.get("/", tokenVerification.verifyTokenAndAdmin ,  userController.findUsers)
router.get("/find/:id", tokenVerification.verifyTokenAndAdmin ,  userController.findUser)
router.put("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  userController.updateUser)
router.delete("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  userController.deleteUser)



module.exports = router