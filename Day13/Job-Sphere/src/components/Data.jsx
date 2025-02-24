// import { createContext, useEffect, useState, useCallback } from "react";
// import PropTypes from "prop-types";

// const DataContext = createContext();

// const Data = ({ children }) => {
//   const [data, setData] = useState([]);
//   const [savedJobs, setSavedJobs] = useState([]);
//   const [originalData, setOriginalData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   const [filters, setFilters] = useState({
//     selectedTypes: [],
//     salaryRange: { min: 35000, max: 200000 },
//     searchQuery: "",
//     currency: "All",
//     location: "",
//     experienceLevel: "All",
//   });

//   // Fetch paginated jobs
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch(
//           `https://joblisting-rd8f.onrender.com/api/jobs?page=${page}&limit=4`
//         );
//         const result = await response.json();
//         if (result.jobs && result.total) {
//           setData(result.jobs);
//           setOriginalData(result.jobs); // Initialize originalData
//           setTotalPages(Math.ceil(result.total / 4));
//         }
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       }
//     };
//     fetchJobs();
//   }, [page]);

//   // Fetch all jobs for filtering and bookmarking
//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       try {
//         const response = await fetch(
//           `https://joblisting-rd8f.onrender.com/api/jobs?limit=100`
//         );
//         const result = await response.json();
//         if (result.jobs) {
//           setFilteredData(result.jobs); // Initialize filteredData
//           const bookmarkedJobs = result.jobs.filter((job) => job.isBookMarked);
//           setSavedJobs(bookmarkedJobs);
//         }
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       }
//     };
//     fetchAllJobs();
//   }, []);

//   // Bookmark a job
//   const BookMark = (id, isBookMarked) => {
//     const newData = data.map((job) =>
//       job.id === id ? { ...job, isBookMarked: !isBookMarked } : job
//     );
//     setData(newData);
//     if (!isBookMarked) {
//       const jobToSave = data.find((job) => job.id === id);
//       if (jobToSave) {
//         setSavedJobs([{ ...jobToSave, isBookMarked: true }, ...savedJobs]);
//       }
//     } else {
//       setSavedJobs(savedJobs.filter((job) => job.id !== id));
//     }
//   };

//   // Reset filters to default values
//   const resetFilters = () => {
//     setFilters({
//       selectedTypes: [],
//       salaryRange: { min: 35000, max: 200000 },
//       searchQuery: "",
//       currency: "All",
//       location: "",
//       experienceLevel: "All",
//     });
//   };

//   // Apply filters
//   const applyFilter = useCallback(() => {
//     if (!originalData || !Array.isArray(originalData)) {
//       console.error("originalData is not defined or not an array");
//       return;
//     }

//     console.log(filters);

//     let filtered = [...originalData];

//     if (filters.selectedTypes.length > 0) {
//       filtered = filtered.filter((job) =>
//         filters.selectedTypes.includes(job.type)
//       );
//     }

//     const searchQuery = filters.searchQuery || "";
//     if (searchQuery.trim() !== "") {
//       const lowerCaseQuery = searchQuery.toLowerCase();
//       filtered = filtered.filter((job) =>
//         job.title.toLowerCase().includes(lowerCaseQuery)
//       );
//     }

//     const currency = filters.currency || "All";
//     if (currency !== "All") {
//       filtered = filtered.filter((job) => job.currency === currency);
//     }

//     const location = filters.location || "";
//     if (location.trim() !== "") {
//       const upperCaseLocation = location.toUpperCase();
//       filtered = filtered.filter((job) =>
//         job.location.toUpperCase().includes(upperCaseLocation)
//       );
//     }

//     const experienceLevel = filters.experienceLevel || "All";
//     if (experienceLevel !== "All") {
//       filtered = filtered.filter(
//         (job) => job.experienceLevel === experienceLevel
//       );
//     }

//     setFilteredData(filtered);
//   }, [filters, originalData]);

//   useEffect(() => {
//     applyFilter();
//   }, [filters, applyFilter]);

//   return (
//     <DataContext.Provider
//       value={{
//         page,
//         setPage,
//         totalPages,
//         jobs: filteredData.length > 0 ? filteredData : data, // Fallback to data if filteredData is empty
//         BookMark,
//         savedJobs,
//         filters,
//         setFilters,
//         resetFilters,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// Data.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export { DataContext, Data };
