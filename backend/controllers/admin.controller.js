import User from "../models/user.model.js";
import Job from "../models/job.model.js";


//dashboard data
export const dashboardData = async (req, res) => {
    try {

        //count job seekers
        const jobSeeker = await User.countDocuments({ role: "jobseeker" });
        if (!jobSeeker) {
            return res.status(404).json({
                success: false,
                message: "No jobseekers found"
            });
        }

        //count employers 
        const employerCount = await User.countDocuments({ role: "employer" });
        if (!employerCount) {
            return res.status(404).json({
                success: false,
                message: "No employers found"
            });
        }

        //count jobs
        const jobCount = await Job.countDocuments();
        if (!jobCount) {
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
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something wennt wrong"
        });
    }
};

//fetch user data
export const fetchUsers = async (req, res) => {
    try {
        //fetch employers
        const employerList = await User.find({ role: "employer" });
        if (!employerList) {
            return res.status(404).json({
                success: false,
                message: "No exmployers found"
            });
        }

        //fetch jobseekers
        const jobSeekerList = await User.find({ role: "jobseeker" });
        if (!jobSeekerList) {
            return res.status(404).json({
                success: false,
                message: "No jobseeker found"
            });
        }

        return res.status(200).json({
            success: true,
            employerList, jobSeekerList
        });

    } catch (error) {
        //console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

//fetch all jobs
export const fetchAllJobs = async (req, res) => {
    try {
        const allJobs = await Job.find();

        if (!allJobs) {
            return res.status(404).json({
                success: false,
                message: "No jobs found"
            });
        }

        return res.status(200).json({
            success: true,
            allJobs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}