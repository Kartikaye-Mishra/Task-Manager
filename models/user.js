import mongoose from "mongoose"

  const Schema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
      select:false
    },
    createdAT:{
      type:Date,
      default:Date.now
    }
  }) 

  const User = mongoose.model("User",Schema);

 export default User;