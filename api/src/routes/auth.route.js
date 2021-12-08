const router = require("express").Router()
const authController = require("../controller/auth.controller.js")

router.post("/register", authController.userRegistration)
router.post("/login", authController.userLogin)

module.exports = router