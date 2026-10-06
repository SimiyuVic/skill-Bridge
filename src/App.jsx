import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
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

function App() {

  return (
    <div>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/all-jobs" element={ <AllJobs /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact /> } />
        <Route path="/job-details/:id" element={ <JobDetails /> } />
        <Route path="/login" element={ <Login />  } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/job-seekers" element={ <JobSeeker /> }/>
        <Route path="/employers" element={ <EmployerSignup /> } />
      </Routes>
      
      
      <Footer />
    </div>
  )
}

export default App
