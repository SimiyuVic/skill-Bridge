import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm p-4">
                            <h5>
                                JobSeekers
                            </h5>
                            <p>
                                Apply for exclusive jobs on skillBridge.
                                Be found by employers. <br /> Use our AI assistant to see how best you qualify.
                            </p>
                            <Link className="btn btn-sm btn-outline-primary" to="/job-seekers">
                                Register Now
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm p-4">
                            <h5>
                                Employers
                            </h5>
                            <p>
                                Hire the best candidates for your open positions on skillBridge. <br />
                                 Register, post jobs and search exclusive candidate profiles.
                            </p>
                            <Link className="btn btn-sm btn-outline-primary" to="/employers">
                                Register Now
                            </Link>
                        </div>
                    </div>

                    <h6>
                        If you already have an account <Link className="btn btn-primary m-3" to="/login">Login Here</Link>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default SignUp;