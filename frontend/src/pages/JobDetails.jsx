import { Link, useParams } from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useState, useEffect } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";



const JobDetails = () => {

    const { id } = useParams();
    //console.log(id);
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState(null);
    const backendLink = useSelector((state)=>state.prod.link);


    //fetch job details

    useEffect(()=>{
        const fetchJobDetails = async()=>{
            try{
                const response = await axios.get(`${backendLink}/api/v1/auth/job-details/${id}`, {
                    withCredentials: true
                });
                console.log(response?.data.jobInfo);
                setJob(response?.data.jobInfo);
            }
            catch(error){
                toast.error(error.response?.data.message || "Cannothe fetch job details");
            }
        }
        fetchJobDetails();
    }, [backendLink])


    return (
        <div>
            <div className="container mt-3">
                {loading && (
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Loading job details, please wait...</span>
                    </div>
                )}

                {job &&
                    <div className="row gap-4">
                        <div className="col-md-7">
                            <div className="card border-0 shadow-sm p-3">
                                <h4>
                                    {job.jobTitle}
                                </h4>
                                <h6 className="text-primary">
                                    {job.companyName}
                                </h6>
                                <span className="border-bottom my-2" />
                                <div className="d-flex justify-content-between">
                                    <span>
                                        <h6>Location</h6>
                                        <CiLocationOn /> {job.location}
                                    </span>
                                    <span>
                                        <h6>Employment Type</h6>
                                        <IoBriefcaseOutline /> {job.employmentType}
                                    </span>
                                </div>
                                <h6 className="my-3"> Job Description</h6>
                                <p>
                                    {job.jobDescription}
                                </p>
                                <h6 className="my-3"> Job Requirements</h6>
                                <p>
                                    {job.jobRequirements}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <h5 className="p-2">
                                    Interested in this job?
                                </h5>
                                <small className="p-2 text-muted">
                                    Apply now and take next steps towards your career.
                                </small>
                                <Link className="btn btn-primary btn-sm">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default JobDetails;