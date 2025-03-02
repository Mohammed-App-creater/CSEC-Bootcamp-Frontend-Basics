import { create } from "zustand";

const useJobStore = create((set, get) => ({
  data: [],
  savedJobs: [],
  originalData: [],
  filteredData: [],
  isFiltered: false,
  page: 1,
  totalPages: 0,
  filters: {
    selectedTypes: ["normal"],
    salaryRange: { min: 35000, max: 200000 },
    searchQuery: "",
    currency: "All",
    location: "",
    experienceLevel: "All",
  },

  fetchJobs: async () => {
    try {
      const response = await fetch(
        `https://joblisting-3hjv.onrender.com/api/jobs?page=${
          get().page
        }&limit=4`,
      );
      const result = await response.json();
      if (result.jobs && result.total) {
        set({
          data: result.jobs,
          originalData: result.jobs,
          totalPages: Math.ceil(result.total / 4),
        });
        console.log("result", get().originalData);
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  },

  fetchAllJobs: async () => {
    try {
      const response = await fetch(
        `https://joblisting-3hjv.onrender.com/api/jobs?limit=100`,
      );
      const result = await response.json();
      if (result.jobs) {
        set({
          filteredData: result.jobs,
          savedJobs: result.jobs.filter((job) => job.isBookMarked),
        });
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
        job.id === id ? { ...job, isBookMarked: !isBookMarked } : job,
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

  applyFilterWithPagination: () => {
    const { filters, originalData, page } = get();
    set({ isFiltered: true });

    if (!originalData || !Array.isArray(originalData)) {
      console.error("originalData is not defined or not an array");
      return;
    }

    let filtered = [...originalData];

    // Apply filters
    if (filters.selectedTypes.length > 0) {
      filtered = filtered.filter((job) =>
        filters.selectedTypes.includes(job.type),
      );
    }

    if (filters.searchQuery.trim() !== "") {
      const lowerCaseQuery = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(lowerCaseQuery),
      );
    }

    if (filters.currency !== "All") {
      filtered = filtered.filter((job) => job.currency === filters.currency);
    }

    if (filters.location.trim() !== "") {
      filtered = filtered.filter((job) =>
        job.location.toUpperCase().includes(filters.location.toUpperCase()),
      );
    }

    if (filters.experienceLevel !== "All") {
      filtered = filtered.filter(
        (job) => job.experienceLevel === filters.experienceLevel,
      );
    }

    // Debugging
    console.log("Filtered Jobs:", filtered);
    console.log("Current Page:", page);

    // Pagination Logic
    const jobsPerPage = 4;
    const totalPages = Math.ceil(filtered.length / jobsPerPage);
    const startIndex = (page - 1) * jobsPerPage;
    const paginatedJobs = filtered.slice(startIndex, startIndex + jobsPerPage);

    console.log("Jobs on this page:", paginatedJobs);
    console.log("Total Pages:", totalPages);

    set({ filteredData: paginatedJobs, totalPages });
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
