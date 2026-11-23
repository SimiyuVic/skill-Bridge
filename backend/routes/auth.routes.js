import express from "express";
import { 
    changeAvatar,
    checkCookie, 
    getUserDetails, 
    loginUser, 
    logoutUser} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import upload from "../middleware/image.midddleware.js";

const router = express.Router();

//login
router.post("/login", loginUser);

//check cookie
router.get("/check-cookie", checkCookie);

//fetch user details
router.get("/user-details", 
    authMiddleware.verifyToken,
    getUserDetails);

//logout user
router.post("/logout", logoutUser);


//change avatar
router.patch("/change-avatar", 
    authMiddleware.verifyToken,
    upload.single("profile"),
    changeAvatar);

export default router;