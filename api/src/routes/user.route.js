const router = require("express").Router()
const { userUpdate } = require("../controller/user.controller")
const { verifyToken, verifyTokenAndAuthorizaton } = require("../middleware/verifyToken")

router.put("/", verifyTokenAndAuthorizaton ,userUpdate)

module.exports = router