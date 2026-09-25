import { CiLocationOn } from "react-icons/ci";

const JobCards = ({ allJobs }) => {
    return (
        <div>
            <div className="row mt-2">
                {
                    allJobs.map((job) => (
                        <div className="col-md-4">
                            <div className="card p-3 my-2">
                                <div className="d-flex">
                                    <h5 className="me-2"> {job.jobTitle} </h5>
                                    <p className="fw-bold text-danger">{job.discretion}</p>
                                </div>
                                <p><CiLocationOn />  {job.location}</p>
                                <h6 className="text-primary"> {job.companyName} </h6>
                                <p> {job.jobDescription.slice(0, 50)} . . . </p>
                                <button className="btn btn-outline-primary btn-sm">More Details</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default JobCards;