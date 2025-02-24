import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Job_search from "./Job_search";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import NavBar from "./NavBar";
import DiscriptionPage from "../discription/DiscriptionPage";
import useJobStore from "./store/DataStore.js"; // Import Zustand store
import { useEffect } from "react";
import { JobPosting } from "./JobPosting.jsx";

function App() {
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const fetchAllJobs = useJobStore((state) => state.fetchAllJobs);

  useEffect(() => {
    fetchJobs();
    fetchAllJobs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<NavBar />}>
        <Route path="/jobposting" element={<JobPosting />} />
          <Route index element={<Job_search />} />
          <Route path="/description" element={<DiscriptionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
