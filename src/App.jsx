import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
import AllJobs from "./pages/AllJobs"
import About from "./pages/AboutUs"
import Contact from "./pages/ContactUs"
import JobDetails from "./pages/JobDetails"

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/all-jobs" element={ <AllJobs /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact /> } />
        <Route path="/job-details/:id" element={ <JobDetails /> } />
      </Routes>
      
      
      <Footer />
    </div>
  )
}

export default App
