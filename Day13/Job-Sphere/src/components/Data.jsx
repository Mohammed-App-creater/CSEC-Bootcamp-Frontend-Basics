import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const Data = ({ children }) => {
  const [data, setData] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [salaryRange, setSalaryRange] = useState({ min: null, max: null });
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState("All");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("All");
  const [test, setTest] = useState([]);
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
        setTest(result.jobs || []);
        const bookmarkedJobs = (result.jobs || []).filter(
          (job) => job.isBookMarked
        );

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
        setSavedJobs([{ ...jobToSave, isBookMarked: true }, ...savedJobs]);

      }
    } else {
      setSavedJobs(savedJobs.filter((job) => job.id !== id));
    }
  };

  const applyFilter = () => {
    let filteredData = [...originalData];
    
    if (selectedTypes.length > 0) {
      filteredData = filteredData.filter((job) =>
        selectedTypes.includes(job.type)
      );
    }

    if (salaryRange.min && salaryRange.max) {
      filteredData = filteredData.filter((job) => {
        const salary = Number(job.salary.replace(/\D/g, ""));
        return salary >= salaryRange.min && salary <= salaryRange.max;
      });
    }

    if (searchQuery) {
      filteredData = filteredData.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (currency !== "All") {
      filteredData = filteredData.filter((job) => job.currency === currency);
    }

    if (location) {
      filteredData = filteredData.filter((job) =>
        job.location.toUpperCase().includes(location.toUpperCase())
      );
    }

    if (experienceLevel !== "All") {
      filteredData = filteredData.filter(
        (job) => job.experienceLevel === experienceLevel
      );
    }
    console.log(...new Set(test.map((job) => job.currency)));
    setData(filteredData.length > 0 ? filteredData : originalData);
  };

  useEffect(() => {
    applyFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedTypes,
    salaryRange,
    searchQuery,
    currency,
    location,
    experienceLevel,
  ]);

  return (
    <DataContext.Provider
      value={{
        page,
        setPage,
        totalPages,
        jobs: data,
        BookMark,
        setSelectedTypes,
        setSalaryRange,
        setSearchQuery,
        savedJobs,
        setCurrency,
        setLocation,
        setExperienceLevel,
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
