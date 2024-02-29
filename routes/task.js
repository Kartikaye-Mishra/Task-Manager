import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import {addTask,allTask, updateTask,deleteTask} from "../controllers/task.js"

const router = express.Router();

router.use(express.json());

router.post("/new",isAuthenticated,addTask);
router.get("/all",isAuthenticated,allTask);

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);

export default router;