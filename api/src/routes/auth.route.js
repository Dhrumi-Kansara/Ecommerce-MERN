const router = require("express").Router()
const {userRegistration, userLogin} = require("../controller/auth.controller.js")

router.post("/register", userRegistration)
router.post("/login", userLogin)

module.exports = router