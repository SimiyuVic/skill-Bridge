import { useEffect, useState } from "react";
import JobCards from "../../../components/JobCards";

const JobSection = () => {

    const [jobs, setJobs] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/jobs")
                .then((response) => {

                    if (!response.ok) {
                        throw Error("Cannot Fetch Data!");
                    }

                    return response.json() //parse the data
                })
                .then((data) => {
                    setJobs(data)
                    setLoading(false);
                    setError(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                })
        }, 2000)
    }, []);

    console.log(jobs);

    return (
        <div>
            <div className="container my-2">
                <h4 className="text-center mb-2">
                    Latest <span className="border-bottom border-3 border-primary p-1">Job</span> Vacancies
                </h4>
                <p className="text-muted text-center">
                    We have a wide range of jobs, click on one to apply.
                </p>
                {error && <div className="text-danger"> {error} </div>}
                {loading && <div className="text-success fw-bold"> Loading . . . </div>}
                {jobs && <JobCards allJobs={jobs.filter(job => job.discretion === "contract")} />}
                <h4 className="text-center my-3">
                    Our PartTime Jobs
                </h4>
                {jobs && <JobCards allJobs={jobs.filter(job => job.discretion === "parttime")} />}
                <h4 className="text-center my-3">
                    Our FullTime Jobs
                </h4>
                {jobs && <JobCards allJobs={jobs.filter(job => job.discretion === "fulltime")} />}
            </div>
        </div>
    );
}

export default JobSection;