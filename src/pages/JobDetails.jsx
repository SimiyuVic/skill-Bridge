import { useParams } from "react-router-dom"
import useFetch from "../hook/useFetch.js";

const JobDetails = () => {

    const { id } = useParams();
    const { allData: job, error, loading } = useFetch(`http://localhost:4000/jobs/${id}`);


    return (
        <div>
            {loading && (
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Loading Data, please wait...</span>
                    </div>
                )}
            {job &&
                <div className="container my-3 p-3"> 
                    <h5> { job.jobTitle } </h5>
                    <h6> { job.companyName } </h6>
                    <p> { job.discretion } </p>

                    <p> { job.jobDescription } </p>
                </div>
            }
        </div>
    );
}

export default JobDetails;