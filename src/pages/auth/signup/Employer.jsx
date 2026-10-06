import { Link } from "react-router-dom";

const EmployerSignup = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-8  card border-0 shadow-sm">
                        <div className="row">
                            <div className="col-md-6 bg-primary">
                                1
                            </div>
                            <div className="col-md-6 p-3">
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g Travel Companies"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Company Email
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g travel@companies.co.ke"
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
                                            Company Location
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g Waiyaki way"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="">
                                            Your Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Type your password"
                                            className="form-control"
                                        />
                                    </div>
                                    <button className="btn btn-primary btn-sm w-100">
                                        Register Now
                                    </button>
                                    <h6 className="text-center my-2">
                                        Already have an Account?
                                        <Link 
                                        to="/login" 
                                        style={{textDecoration: "none"}}
                                        className="ms-2"
                                        >
                                            Login
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

export default EmployerSignup;