import ErrorHandler from "../middlewares/error.js";
import Task from "../models/task.js"

export const addTask = async(req,res,next)=>{

    try {
        const{title,description} = req.body;

    await Task.create({
        title,
        description,
        user:req.user
    })
    res.json({
        success:true,
        message:"Task added Successfully"
    })
    } catch (error) {
        next(error)
    }
}

export const allTask = async(req,res,next)=>{
try {
    
    const tasks = await Task.find({user:req.user._id});

    res.json({
        message:"Success",
        tasks
    })
} catch (error) {
    next(error)
}
}

export const updateTask = async(req,res,next)=>{
    try {
        const {id} = req.params;

    const task =await Task.findById(id);

    if(!task) return next(new Error("Task not Found"),404)
    
   
    const prev = task.isCompleted;
    task.isCompleted = !prev;
    await task.save();

    res.json({
        Success:true,
        message:"Updated"

    })
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async(req,res,next)=>{
    try {
        const {id} = req.params;

    const task =await Task.findById(id);
    if(!task) return next(new ErrorHandler("Task Unavailable",404))
   
    await Task.deleteOne({_id:req.params.id});

    res.json({
        Success:true,
        message:"deleted"
    })
    } catch (error) {
        next(error)
    }
}
