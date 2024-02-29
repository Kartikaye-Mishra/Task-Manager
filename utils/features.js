import jwt from "jsonwebtoken";

export const sendCookie = (res,user,message,status=200)=>{
    
    const token = jwt.sign({_id : user._id},process.env.JWT_SECRETCODE)
    
    res.status(status).cookie("token",token,{
        httpOnly:true,
        maxAge: 15*60*1000,
        sameSite:process.env.NODE_ENV==="DEVELOPMENT"?"lax":"none",
        secure:process.env.NODE_ENV==="DEVELOPMENT"?false:true
        
        
    }).json({
        success:true,
        message
    })
}