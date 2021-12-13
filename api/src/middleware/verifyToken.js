const jwt = require("jsonwebtoken")
const response = require("../helper/response.js")

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if(authHeader) {
    const token = authHeader.split(" ")[1]
     jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
        if(err) {
          console.log(err)
          return res.json(response.generate(true, "Token is not valid!", 401, null)) 
        } 
        req.user = user;
        next();
     })
  } else {
    res.json(response.generate(true, "You are not authenticated!", 500, null)) 
  }
}

const verifyTokenAndAuthorizaton = (req, res, next) => {
  verifyToken(req, res, ()=> {
    if(req.user.id===req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.json(response.generate(true, "You are not allowed to do that!", 500, null)) 
    }
  }) 
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, ()=> {
    if(req.user.isAdmin) {
      next()
    } else {
      res.json(response.generate(true, "You are not allowed to do that!", 500, null)) 
    }
  }) 
}



module.exports = { verifyToken, verifyTokenAndAuthorizaton, verifyTokenAndAdmin }
