import { useState } from "react";
import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobs = () => {

    const { allData: jobs, loading, error } = useFetch("http://localhost:4000/jobs");

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    const filteredJobs = jobs.filter((job) => {
        const searchMatch =  job.companyName.toLowerCase().includes(search.toLowerCase()) ||
        job.jobTitle.toLowerCase().includes(search.toLowerCase())

        const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());

        return searchMatch && locationMatch;
    });

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <h5>
                            Search through our job list.
                        </h5>
                        <div className="card border-0 shadow-sm p-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="company name">
                                        Search by job-title or Company name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g Developer or Safaricom"
                                        className="form-control my-2"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company location">
                                        Search by Company Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g Waiyaki Way"
                                        className="form-control my-2"
                                        value={location}
                                        onChange={(e)=>setLocation(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h6 className="text-primary">
                            {
                                filteredJobs.length
                            } jobs(s) found
                        </h6>
                        {loading && <div className="text-success fw-bold"> Loading jobs . . . </div>}
                        {error && <div className="text-danger fw-bold"> {error} </div>}
                        <JobCards allJobs={filteredJobs} />
                        {!loading && !error && filteredJobs.length === 0 && (
                            <div className="flex flex-col items-center justify-center p-8 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">No jobs found</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Try adjusting your search or filter criteria to find what you're looking for.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllJobs;