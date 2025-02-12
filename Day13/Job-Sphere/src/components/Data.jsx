import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const Data = ({ children }) => {
  const [data, setData] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [, setSelectedTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${page}&limit=4`
        );
        const result = await response.json();

        setData(result.jobs || []);
        setOriginalData(result.jobs || []);
        setTotalPages(Math.floor(result.total / 4) || 0);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, [page]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?limit=100`
        );
        const result = await response.json();
        
        const bookmarkedJobs = (result.jobs || []).filter(job => job.isBookMarked);
        
        setSavedJobs(bookmarkedJobs);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
  
    fetchJobs();
  }, []);

  const BookMark = (id, isBookMarked) => {
    const newData = data.map((job) =>
      job.id === id ? { ...job, isBookMarked: !isBookMarked } : job
    );
    setData(newData);
    if (!isBookMarked) {
      const jobToSave = data.find((job) => job.id === id);
      if (jobToSave) {
        setSavedJobs([...savedJobs, { ...jobToSave, isBookMarked: true }]);
      }
    } else {
      setSavedJobs(savedJobs.filter((job) => job.id !== id));
    }
  };

  const JobType = (types) => {
    setSelectedTypes(types);
    if (types.length === 0) {
      setData(originalData);
    } else {
      setData(originalData.filter((job) => types.includes(job.type)));
    }
  };

  const salarySpan = (min, max) => {
    if (min && max) {
      setData(
        originalData.filter((job) => {
          const salary = Number(job.salary.replace(/\D/g, ""));
          return salary >= min && salary <= max;
        })
      );
    } else {
      setData(originalData);
    }
  };

  const Search = (query) => {
    if (query) {
      setData(
        originalData.filter((job) =>
          job.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setData(originalData);
    }
  };

  const Currency = (value) => {
    if (value === "All") {
      setData(originalData); 
    } else {
      setData(originalData.filter((job) => job.currency === value));
    }
  }

  const Location = (value) => {
    console.log(value);
    if (value === "") {
      setData(originalData);
    } else {
      setData(originalData.filter((job) => job.location.toUpperCase().includes(value.toUpperCase())));
    }
  };

  const ExperienceLevel = (value) => {
    if (value === "All") {
      setData(originalData);
    } else {
      setData(originalData.filter((job) => job.experienceLevel === value));
    }
  }
  

  return (
    <DataContext.Provider
      value={{
        jobs: data,
        BookMark,
        JobType,
        salarySpan,
        page,
        setPage,
        totalPages,
        Search,
        savedJobs,
        Currency,
        Location,
        ExperienceLevel,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

Data.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, Data };
