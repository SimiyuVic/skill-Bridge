
const HeroSection = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h1 className="display-4">
                            Shaping your <br /> future with the best <br /> recruitment.
                        </h1>

                        <p className="fs-5 text-muted">
                            Growth and success go hand in hand. We will help you with it. <br />
                            Focus on getting your dream job.
                        </p>

                        <form>
                            <div
                                className="input-group input-group-sm"
                                style={{ width: "50%" }}
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Leave us your email"
                                />

                                <button className="btn btn-primary">
                                    Get Notification
                                </button>
                            </div>
                        </form>

                        <div className="d-flex my-3">
                            <h6 className="me-3">
                                <i className="bi bi-check-circle-fill"></i>
                                <span className="ms-3">
                                    Update Everyday
                                </span>
                            </h6>

                            <h6>
                                <i className="bi bi-check-circle-fill"></i>
                                <span className="ms-3">
                                    Easy Application From The Email
                                </span>
                            </h6>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-6">
                        <div className="position-relative">
                            <img
                                src="./HeroSection.jpg"
                                alt="Professional recruitment meeting"
                                className="img-fluid rounded-4 shadow-sm"
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover"
                                }}
                            />

                            {/* Small floating card */}
                            <div
                                className="position-absolute bg-white rounded-3 shadow p-3"
                                style={{
                                    bottom: "25px",
                                    left: "25px"
                                }}
                            >
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                                        <i className="bi bi-briefcase-fill"></i>
                                    </div>

                                    <div>
                                        <h6 className="mb-0">
                                            Find Your Opportunity
                                        </h6>
                                        <small className="text-muted">
                                            Start your career journey
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
