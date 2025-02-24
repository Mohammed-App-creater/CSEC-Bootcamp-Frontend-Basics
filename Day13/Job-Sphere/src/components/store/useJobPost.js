import {create} from "zustand";

const useJobPost = create((set) => ({
  jobPost: {
    title: "",
    type: "",
    salary: "",
    description: "",
    location: "",
    experienceLevel: "",
    company: "",
    logo: "",
    currency: "",
  },
  loading: false,
  setJobPost: (newJobPost) => set({ jobPost: newJobPost }),
  setLoading: (loading) => set({ loading }),
}));

export default useJobPost;
