import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobs = () => {

    const { allData:jobs, error, loading } = useFetch("http://localhost:4000/jobs");

    return ( 
        <div>
            <div className="container my-3">
                {loading && (
                    <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <span >Loading Jobs, Please wait...</span>
                    </div>
                )}
                {error &&  <div className="text-danger fw-bold"> { error } </div> }
                <div className="row">
                    <div className="col-md-3">
                        1
                    </div>
                    <div className="col-md-9">
                        { jobs && <JobCards allJobs={jobs} /> }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AllJobs;