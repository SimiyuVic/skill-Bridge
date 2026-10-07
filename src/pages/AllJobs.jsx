import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobs = () => {

    const { allData: jobs, loading, error } = useFetch("http://localhost:4000/jobs");

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
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <JobCards allJobs={jobs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllJobs;