import { Link } from "react-router-dom";

const JobSeeker = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8  card border-0 shadow-sm">
                        <div className="row">
                            <div className="col-md-6">
                                1
                            </div>
                            <div className="col-md-6 p-3">
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g James Burton"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Enter Your Email
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g james@gmail.com"
                                            className="form-control"
                                        />
                                    </div>
                                     <div className="mb-3">
                                        <label htmlFor="">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g +254709090909"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Enter Your Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Type your password"
                                            className="form-control"
                                        />
                                    </div>
                                    <button className="btn btn-primary btn-sm w-100">
                                        Login
                                    </button>
                                    <h6 className="my-3">
                                        Don't have an account?
                                        <Link
                                        to="/signup"
                                        className="ms-2"
                                        style={{
                                            textDecoration: "none"
                                        }}
                                        >
                                            Register Now
                                        </Link>
                                    </h6>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default JobSeeker;