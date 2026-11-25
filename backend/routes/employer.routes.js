import express from "express";
import { createUser, fetchEmployerJob, postJobs } from "../controllers/employer.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

//register employer
router.post("/register", createUser);

//post a job
router.post("/post-job", 
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole("employer"),
    postJobs);

//fetch employer jobs
router.get("/employer-jobs", 
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole("employer"),
    fetchEmployerJob);
 
export default router;