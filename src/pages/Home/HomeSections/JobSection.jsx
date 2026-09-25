import { useState } from "react";
import JobCards from "../../../components/JobCards";



const JobSection = () => {

    const [jobs, setJobs] = useState([
        {
            id: 1,
            jobTitle: "Frontend Developer",
            companyName: "TechNova Solutions",
            discretion: "Full-time",
            location: "Nairobi, Kenya",
            jobDescription: "Build responsive, high-performance web applications using React, Next.js, and modern CSS frameworks."
        },
        {
            id: 2,
            jobTitle: "Backend Node.js Engineer",
            companyName: "CloudScale Systems",
            discretion: "Full-time",
            location: "Remote",
            jobDescription: "Design scalable RESTful APIs, manage microservices, and optimize MongoDB and PostgreSQL databases."
        },
        {
            id: 3,
            jobTitle: "UI/UX Designer",
            companyName: "Apex Digital Agency",
            discretion: "Contract",
            location: "Mombasa, Kenya",
            jobDescription: "Create wireframes, interactive prototypes, and user-centered design systems using Figma and Adobe XD."
        },
        {
            id: 4,
            jobTitle: "Full Stack Developer",
            companyName: "InnoWave Labs",
            discretion: "Full-time",
            location: "Nairobi, Kenya",
            jobDescription: "Develop end-to-end web platforms utilizing the MERN stack and maintain automated CI/CD deployment pipelines."
        },
        {
            id: 5,
            jobTitle: "Data Analyst",
            companyName: "Insight Analytics",
            discretion: "Part-time",
            location: "Remote",
            jobDescription: "Analyze operational datasets, generate business dashboards using SQL and PowerBI, and present insights to stakeholders."
        },
        {
            id: 6,
            jobTitle: "DevOps Engineer",
            companyName: "SecureNet Systems",
            discretion: "Contract",
            location: "Nairobi, Kenya",
            jobDescription: "Automate cloud infrastructure provisioning on AWS, manage Docker containers, and optimize system uptime."
        },
        {
            id: 7,
            jobTitle: "React Native Mobile Developer",
            companyName: "AppStudio Tech",
            discretion: "Full-time",
            location: "Remote",
            jobDescription: "Develop cross-platform iOS and Android applications using React Native and Redux Toolkit state management."
        },
        {
            id: 8,
            jobTitle: "IT Support Specialist",
            companyName: "Waraba Health Services",
            discretion: "Full-time",
            location: "Bungoma, Kenya",
            jobDescription: "Troubleshoot local network infrastructure, maintain hardware assets, and support internal staff software operations."
        },
        {
            id: 9,
            jobTitle: "Python / Django Developer",
            companyName: "DataCore Tech",
            discretion: "Part-time",
            location: "Kisumu, Kenya",
            jobDescription: "Maintain backend Django services, build database integrations, and implement secure user authentication flows."
        },
        {
            id: 10,
            jobTitle: "QA Automation Engineer",
            companyName: "QualityFirst QA",
            discretion: "Contract",
            location: "Remote",
            jobDescription: "Write and execute automated end-to-end test suites using Playwright, Cypress, and Jest."
        },
        {
            id: 11,
            jobTitle: "Technical Lead",
            companyName: "Enterprise Code Corp",
            discretion: "Full-time",
            location: "Nairobi, Kenya",
            jobDescription: "Lead agile engineering teams, oversee software architecture decisions, and mentor junior developers."
        },
        {
            id: 12,
            jobTitle: "Junior Web Developer",
            companyName: "BrightSparks Media",
            discretion: "Part-time",
            location: "Eldoret, Kenya",
            jobDescription: "Assist with landing page development, bug fixes, client website maintenance, and content updates using Bootstrap and JavaScript."
        }
    ]);

    console.log(jobs);

    return (
        <div>
            <div className="container my-2">
                <h4 className="text-center mb-2">
                    Latest <span className="border-bottom border-3 border-primary p-1">Job</span> Vacancies
                </h4>
                <p className="text-muted text-center">
                    We have a wide range of jobs, click on one to apply.
                </p>
                <JobCards allJobs={jobs} />
            </div>
        </div>
    );
}

export default JobSection;