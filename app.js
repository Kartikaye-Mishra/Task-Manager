import express from "express"
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

config({
  path:"./data/config.env"
})
 
const app = express();
// using middlewares
app.use(cookieParser());

app.use(cors(
  {
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  }
))


// using routes

app.use("/api/v1/users",userRouter);
app.use("/tasks",taskRouter);

app.get("/",(req,res)=>{
    res.send("Nice2")
})
console.log("Frontend Url is ",process.env.FRONTEND_URL);
// Using Error Middleware
app.use(errorMiddleware)
export default app;


