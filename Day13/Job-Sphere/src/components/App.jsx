import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Job_search from "./Job_search";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import { Data } from "./Data";

function App() {
  return (
    <Data>
      <Router>
        <Routes>
          <Route path="/" element={<Job_search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Data>
  );
}

export default App;
