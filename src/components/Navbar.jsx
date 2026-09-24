
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container">

                {/* Logo */}
                <a
                    className="navbar-brand fw-bold text-primary fs-4"
                    href="#"
                >
                    skillBridge
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav mx-auto gap-lg-2">

                        <li className="nav-item">
                            <a
                                className="nav-link active fw-medium"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                            >
                                Find Jobs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                            >
                                For Employers
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                            >
                                About Us
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                    {/* Get Started */}
                    <div className="d-flex mt-3 mt-lg-0">
                        <a
                            href="#"
                            className="btn btn-primary px-4 py-2 fw-semibold"
                        >
                            Get Started
                            <i className="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;