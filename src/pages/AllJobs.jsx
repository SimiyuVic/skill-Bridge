import JobCards from "../components/JobCards";
import useFetch from "../hook/useFetch";

const AllJobs = () => {

    const { allData:jobs, error, loading } = useFetch("http://localhost:4000/jobs");

    return ( 
        <div>
            <div className="container my-3">
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