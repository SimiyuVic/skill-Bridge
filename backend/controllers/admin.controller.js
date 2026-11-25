import User from "../models/user.model.js";
import Job from "../models/job.model.js";


//dashboard data
export const dashboardData = async(req, res)=>{
    try{

        //count job seekers
        const jobSeeker = await User.countDocuments({ role: "jobseeker" });
        if(!jobSeeker){
            return res.status(404).json({
                success: false,
                message: "No jobseekers found"
            });
        }

        //count employers 
        const employerCount = await User.countDocuments({ role: "employer" });
        if(!employerCount){
            return res.status(404).json({
                success: false,
                message: "No employers found"
            });
        }

        //count jobs
        const jobCount = await Job.countDocuments();
        if(!jobCount){
            return res.status(404).json({
                success: false,
                message: "No jobs found"
            });
        }

        //send data to frontend
        return res.status(200).json({
            success: true,
            jobSeeker, employerCount, jobCount
        });


    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Something wennt wrong"
        });
    }
}