import express from "express";
import { createJobSeeker } from "../controllers/jobseeker.controller.js";

const router = express.Router();

router.post("/register", createJobSeeker);
//router.post("/skills")

export default router;