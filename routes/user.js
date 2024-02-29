import express from "express"
import { 
    
    getAllUsers,
    getMyProfile,
    registerNewUser,
    login,
    logout

}
from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.use(express.json());

router.get("/all",getAllUsers)

router.get("/me",isAuthenticated, getMyProfile)

router.post("/new",registerNewUser)

router.post("/login",login)

router.get("/logout",logout)






export default router;