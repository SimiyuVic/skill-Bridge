import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


const EditJob = () => {

    const backendLink = useSelector((state) => state.prod.link);
    const { id } = useParams();
    const redirect = useNavigate();

    const [jobTitle, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobDescription, setDescription] = useState("");
    const [jobRequirements, setRequirements] = useState("");

    //retrieve job details
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`${backendLink}/api/v1/auth/job-details/${id}`, {
                    withCredentials: true
                });
                //console.log(response?.data.jobInfo);
                setTitle(response?.data.jobInfo.jobTitle || "");
                setLocation(response?.data.jobInfo.location || "");
                setDescription(response?.data.jobInfo.jobDescription || "");
                setRequirements(response?.data.jobInfo.jobRequirements || "");
            }
            catch (error) {
                toast.error(error.response?.data.message || "Cannothe fetch job details");
            }
        }
        fetchJobDetails();
    }, [backendLink]);

    //update the job
    const updateJobDetails = async(e)=>{
        e.preventDefault();

        const jobData = { jobTitle, location, jobDescription, jobRequirements};

        try{
            const response =await axios.put(`${backendLink}/api/v1/employer/update-job/${id}`, jobData, {
                withCredentials: true
            });

            redirect("/employer/jobs");
            toast.success(response?.data.message);
        }
        catch(error){
            toast.error(error.response?.data.message || "cannot update job");
        }
    }

    return (
        <div>
            <div className="card shadow-lg p-3 border-0">
                <form onSubmit={updateJobDetails}>
                    <div className="mb-3">
                        <label className="form-label mb-2">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="job title . . ."
                            value={jobTitle}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label claclassNamess="form-label mb-2">Job Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="job title . . ."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="form-field mb-3">
                        <label className="form-label">Job Description</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            value={jobDescription}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-field mb-3">
                        <label className="form-label">Job Requiremensts</label>
                        <textarea
                            className="form-control"
                            rows="8"
                            value={jobRequirements}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">
                            Update Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditJob;