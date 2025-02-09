import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const Data = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://joblisting-rd8f.onrender.com/api/jobs");
        const result = await response.json();
        setData(result.jobs || []);
        console.log(result.jobs);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

Data.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, Data };
