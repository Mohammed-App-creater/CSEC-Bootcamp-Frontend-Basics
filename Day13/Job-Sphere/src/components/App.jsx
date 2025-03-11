import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Job_search from "./Job_search";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import NavBar from "./NavBar";
import DiscriptionPage from "../discription/DiscriptionPage";
import useJobStore from "./store/DataStore.js"; // Import Zustand store
import { useEffect } from "react";
import { JobPosting } from "./JobPosting.jsx";
import ProtactedRouet from "./ProtectedRouet";
import Roles from "../Authentication/Roles.jsx";
import CompanySignup from "../Authentication/CompanySignUp.jsx";
import CompanyProfile from "../Authentication/CompanyProfile.jsx";

function App() {
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const fetchAllJobs = useJobStore((state) => state.fetchAllJobs);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs, fetchAllJobs]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/CompanySignup" element={<CompanySignup />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/" element={<NavBar />}>
          <Route
            path="/jobposting"
            element={
              <ProtactedRouet>
                <JobPosting />
              </ProtactedRouet>
            }
          />
          <Route index element={<Job_search />} />
          <Route
            path="/description"
            element={
              <ProtactedRouet>
                <DiscriptionPage />
              </ProtactedRouet>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
