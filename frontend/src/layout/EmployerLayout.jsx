import { AiFillDashboard } from "react-icons/ai";
import { FaFolderPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoMdCog } from "react-icons/io";
import SideBar from "../components/SideBar";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";

const EmployerLayout = () => {
    const employerLinks = [
        {
            name: "Dashboard",
            path: "/employer",
            icon: <AiFillDashboard />
        },
        {
            name: "Post Job",
            path: "/employer/create-job",
            icon: <FaFolderPlus />
        },
        {
            name: "Applicants",
            path: "/employer/applicants",
            icon: <FaUsers />
        },
        {
            name: "Settings",
            path: "/employer/settings",
            icon: <IoMdCog />
        }
    ];

    return (
        <div>
            <div className="d-flex flex-grow-1 m-3">
                {/* Sidebar Container */}
                <div
                    className="card border-0 shadow-sm p-3 me-3 text-white"
                    style={{
                        backgroundColor: "#790D16", // Slate / Dark Charcoal
                        width: "300px",
                        minHeight: "90vh"
                    }}
                >
                    <SideBar links={employerLinks} title="Employer Dashboard" />
                </div>

                {/* Main Content & Navbar Container */}
                <div className="flex-grow-1">
                    {/* Navbar */}
                    <div
                        className="card border-0 shadow-sm px-4 d-flex justify-content-center"
                        style={{
                            backgroundColor: "#AEC4D4", // Off-white / Soft Slate Light
                            height: "100px",
                            color: "#0F172A"
                        }}
                    >
                        <DashboardNavBar />
                    </div>

                    {/* Page Content Outlet */}
                    <div className="mt-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerLayout;