import { create } from "zustand";
import _ from "lodash";

const useJobStore = create((set, get) => ({
  data: [],
  savedJobs: [],
  originalData: [],
  filteredData: [],
  isFiltered: false,
  page: 1,
  totalJobs: 0,
  filters: {
    selectedTypes: [],
    salaryRange: { min: 35000, max: 200000 },
    searchQuery: "",
    currency: "All",
    location: "",
    experienceLevel: "All",
  },

  fetchJobs: async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/jobs?page=${get().page}&limit=4`
      );
      const result = await response.json();

      if (result.jobs && result.totalJobs) {
        set({
          originalData: result.jobs,
          totalJobs: Math.ceil(result.totalJobs),
        });
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  },

  fetchAllJobs: async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/jobs?limit=100`);
      const result = await response.json();
      if (result.jobs) {
        set({
          data: result.jobs,
          savedJobs: result.jobs.filter((job) => job.isBookMarked),
        });
        console.log("Data", get().data);
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  },

  setPage: (page) => {
    set({ page });
    get().applyFilterWithPagination(); // Re-apply filter when page changes
  },

  setFilters: (filters) => {
    set({ filters });
    get().applyFilterWithPagination(); // Call filter function automatically
  },

  setSalaryRange: (salaryRange) => {
    set({ filters: { ...get().filters, salaryRange } });
    get().applyFilterWithPagination();
  },

  setCurrency: (currency) => {
    set({ filters: { ...get().filters, currency } });
    get().applyFilterWithPagination();
  },

  setLocation: (location) => {
    set({ filters: { ...get().filters, location } });
    get().applyFilterWithPagination();
  },

  setExperienceLevel: (experienceLevel) => {
    set({ filters: { ...get().filters, experienceLevel } });
    get().applyFilterWithPagination();
  },

  setSearchQuery: (searchQuery) => {
    set({ filters: { ...get().filters, searchQuery } });
    get().applyFilterWithPagination();
  },

  setSelectedTypes: (selectedTypes) => {
    set({ filters: { ...get().filters, selectedTypes } });
    get().applyFilterWithPagination();
  },

  BookMark: (id, isBookMarked) => {
    set((state) => {
      const newData = state.data.map((job) =>
        job.id === id ? { ...job, isBookMarked: !isBookMarked } : job
      );
      const savedJobs = isBookMarked
        ? state.savedJobs.filter((job) => job.id !== id)
        : [
            { ...newData.find((job) => job.id === id), isBookMarked: true },
            ...state.savedJobs,
          ];
      return {
        data: newData,
        savedJobs,
        originalData: newData,
        filteredData: newData,
      };
    });
  },

  getJobById: async (id) => {
    await get().fetchAllJobs();
    console.log(get().data.find((job) => job._id === id));
    return get().data.find((job) => job._id === id);
  },

  checkIsFiltered: () => {
    const unfiltered = {
      selectedTypes: [],
      salaryRange: { min: 35000, max: 200000 },
      searchQuery: "",
      currency: "All",
      location: "",
      experienceLevel: "All",
    };
    if (!_.isEqual(get().filters, unfiltered)) {
      set({ isFiltered: true });
    } else {
      set({ isFiltered: false });
    }
  },

  applyFilterWithPagination: ()  => {
    get().fetchAllJobs();
    const { filters, data, page } = get();

    let filtered = data;
    console.log("Data", data);
    if (filters.selectedTypes.length > 0) {
      filtered = filtered.filter((job) =>
        filters.selectedTypes.includes(job.type)
      );
    }

    if (filters.searchQuery.trim() !== "") {
      const lowerCaseQuery = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (filters.currency !== "All") {
      filtered = filtered.filter((job) => job.currency === filters.currency);
    }

    if (filters.location.trim() !== "") {
      filtered = filtered.filter((job) =>
        job.location.toUpperCase().includes(filters.location.toUpperCase())
      );
    }

    if (filters.experienceLevel !== "All") {
      filtered = filtered.filter(
        (job) => job.experienceLevel === filters.experienceLevel
      );
    }
   

    const jobsPerPage = 4;
    const totalJobs = Math.ceil(filtered.length / jobsPerPage);
    const startIndex = (page - 1) * jobsPerPage;
    const paginatedJobs = filtered.slice(startIndex, startIndex + jobsPerPage);
    set({ filteredData: paginatedJobs, totalJobs });
    console.log("filteredData", get().filteredData);
    console.log("totalJobs", get().totalJobs);
    console.log("page", get().page);
    console.log("originalData", get().originalData);
    console.log("filtered", filtered);
  },
  resetFilters: () => {
    set({
      filters: {
        selectedTypes: [],
        salaryRange: { min: 35000, max: 200000 },
        searchQuery: "",
        currency: "All",
        location: "",
        experienceLevel: "All",
      },
    });
    get().applyFilterWithPagination();
    set({ sFiltered: false });
  },
}));

export default useJobStore;
