import SideBar from "../components/SideBar";
import { AiFillDashboard } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
import { MdAddChart } from "react-icons/md";
import { IoMdCog } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";


const JobSeekerLayout = () => {

    const seekerLinks = [
        {
            name: "Dashboard",
            path: "/job-seeker",
            icon: <AiFillDashboard />
        },
        {
            name: "Applications",
            path: "/job-seeker/applications",
            icon: <IoBook />
        },
        {
            name: "My Skills",
            path: "/job-seeker/skills",
            icon: <MdAddChart />
        },
        {
            name: "Settings",
            path: "/job-seeker/settings",
            icon: <IoMdCog />
        },
        {
            name: "Help Section",
            path: "/job-seeker/help",
            icon: <FaHandsHelping />
        },
    ];

    return ( 
        <div>
            <div className="d-flex m-3" >
                <div
                   className="card border-0 shadow-sm p-3 me-3" 
                   style={{
                    backgroundColor: "#086288",
                    width: "300px",
                    minHeight: "90vh"
                   }}
                >
                    <SideBar links={ seekerLinks } title="JobSeeker Dashboard" />
                </div>
                <div className="flex-grow-1">
                    <div
                     className="card border-0 shadow-sm p-3"
                     style={{
                        backgroundColor: "#4D8DBA"
                     }}
                    >
                        <DashboardNavBar />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JobSeekerLayout;