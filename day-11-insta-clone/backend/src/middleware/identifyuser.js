const jwt=require("jsonwebtoken")

function identifyuser(req,res,next){
    
let token;
    try {
        token = req.cookies.token
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized access please login first"
        })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }
    req.user = decoded;
    next();
}
module.exports=identifyuser