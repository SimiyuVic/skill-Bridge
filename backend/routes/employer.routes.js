import express from "express";
import { createUser } from "../controllers/employer.controller.js";
import { changeAvatar } from "../controllers/auth.controller.js";
import upload from "../middleware/image.midddleware.js";

const router = express.Router();

//register employer
router.post("/register", createUser);

//change avatar
router.patch("/change-avatar", 
    upload.single("profile"),
    changeAvatar);

export default router;