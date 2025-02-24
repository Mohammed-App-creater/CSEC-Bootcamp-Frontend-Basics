import { create } from "zustand";

const useJobStore = create((set, get) => ({
  data: [],
  savedJobs: [],
  originalData: [],
  filteredData: [],
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
        }&limit=4`
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
        `https://joblisting-3hjv.onrender.com/api/jobs?limit=100`
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

  setPage: (page) => set({ page }),
  setFilters: (filters) => set({ filters }),
  setCurrency: (currency) => set({ filters: { ...get().filters, currency } }),
  setLocation: (location) => set({ filters: { ...get().filters, location } }),
  setExperienceLevel: (experienceLevel) =>
    set({ filters: { ...get().filters, experienceLevel } }),
  setSearchQuery: (searchQuery) =>
    set({ filters: { ...get().filters, searchQuery } }),
  setSalaryRange: (salaryRange) =>
    set({ filters: { ...get().filters, salaryRange } }),
  setSelectedTypes: (selectedTypes) =>
    set({ filters: { ...get().filters, selectedTypes } }),

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
      return { data: newData, savedJobs };
    });
  },

  applyFilterWithPagination: () => {
    const { filters, originalData, page } = get();
    if (!originalData || !Array.isArray(originalData)) {
      console.error("originalData is not defined or not an array");
      return;
    }

    let filtered = [...originalData];

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

    // Pagination logic (4 jobs per page)
    const totalPages = Math.ceil(filtered.length / 4);
    const paginatedJobs = filtered.slice((page - 1) * 4, page * 4);

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
  },
}));

export default useJobStore;
