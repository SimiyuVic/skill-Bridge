import { useEffect, useState } from "react";
import JobCards from "../../../components/JobCards";



const JobSection = () => {

    const [jobs, setJobs] = useState(null);

    useEffect(()=>{
        fetch()
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
                <JobCards allJobs={jobs.filter(job=>job.discretion === "Contract")} />
            </div>
        </div>
    );
}

export default JobSection;