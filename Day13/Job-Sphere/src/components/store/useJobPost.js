import { create } from "zustand";

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

  postJob: async () => {
    set({ loading: true });

    try {
      const response = await fetch(
        "https://joblisting-3hjv.onrender.com/api/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(useJobPost.getState().jobPost),
        },
      );

      const data = await response.json();
      console.log("Job posted successfully:", data);
    } catch (error) {
      console.error("Error posting job:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useJobPost;
