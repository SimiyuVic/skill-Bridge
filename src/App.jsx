import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import AllJobs from "./pages/AllJobs"
import About from "./pages/AboutUs"
import Contact from "./pages/ContactUs"
import JobDetails from "./pages/JobDetails"
import { Toaster } from "react-hot-toast"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import JobSeeker from "./pages/auth/signup/JobSeeker"
import EmployerSignup from "./pages/auth/signup/Employer"
import PublicLayout from "./layout/Public.jsx"

function App() {

  return (
    <div>
      <Toaster />

      <Routes>
        <Route element={ <PublicLayout /> } >
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/job-details/:id" element={<JobDetails />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job-seekers" element={<JobSeeker />} />
          <Route path="/employers" element={<EmployerSignup />} />
        </Route>


        {/* Admin route */}
        {/* Employer Routes */}
        {/* Job seekers routes */}
      </Routes>


    </div>
  )
}

export default App
