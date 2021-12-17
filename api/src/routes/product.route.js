const router = require("express").Router()
const productontroller = require("../controller/product.controller")

const tokenVerification = require("../middleware/verifyToken")

router.post("/", tokenVerification.verifyTokenAndAdmin ,  productontroller.createProduct) 

router.get("/", tokenVerification.verifyTokenAndAdmin ,  productontroller.fetchAllUsers)
router.get("/stats", tokenVerification.verifyTokenAndAdmin ,  productontroller.fetchUserStats)
router.get("/find/:id", tokenVerification.verifyTokenAndAdmin ,  productontroller.fetchUser)

router.put("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  productontroller.updateUser)
router.delete("/:id", tokenVerification.verifyTokenAndAuthorizaton ,  productontroller.deleteUser)

module.exports = router