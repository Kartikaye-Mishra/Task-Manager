import mongoose from "mongoose"

  const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
  }) 

  const Task = mongoose.model("Task",Schema);

 export default Task;