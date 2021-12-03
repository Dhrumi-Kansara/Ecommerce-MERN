const router = require("express").Router()
const {userRegistration} = require("../controller/auth.controller.js")

router.post("/register", userRegistration)

module.exports = router