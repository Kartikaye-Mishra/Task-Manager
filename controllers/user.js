import User from "../models/user.js";
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";
// import { isAuthenticated } from "../middlewares/auth.js";


export const getAllUsers = async(req,res)=>{
    const users = await User.find({});
    res.json({
        success:true,
        users
    }) 
}
 
export const registerNewUser  = async(req,res,next)=>{
try {
    
    const{name,email,password} = req.body;
  
    let user = await User.findOne({email});

    if(user) return next(new ErrorHandler("User Already exist"))
    
        const hashed = await bcrypt.hash(password,10);
        
        user =  await User.create({
            name,
            email,
            password:hashed
        })
        sendCookie(res,user,"Registerd Success",201);
    
} catch (error) {
    next(error);
}
}

export const login  = async(req,res,next)=>{
    
    try {
        const{email,password} = req.body;
  
    let user = await User.findOne({email}).select("+password");

    if(!user) return next(new ErrorHandler("Invalid email",404))
   
    const is_matched = await bcrypt.compare(password,user.password);
    if(!is_matched){
     
        return next(new ErrorHandler("Invalid Password",401))
    }
    
        sendCookie(res,user,`Welcome ${user.name}`,200)
    
    } catch (error) {
    next(error)    
    }
}

export const getMyProfile  = async(req,res)=>{

    try {
        res.json({
            success:true,
            message:"success",
            user:req.user
        })
    } catch (error) {
        next(error)
    }
   
}

export const logout = (req,res)=>{

res.status(200).cookie("token","",{
    expires : new Date(Date.now()),
    sameSite:process.env.NODE_ENV==="DEVELOPMENT"?"lax":"none",
    secure:process.env.NODE_ENV==="DEVELOPMENT"?false:true
}).json({
    success:true,
    message:"Logged out successfully"
})
    

}