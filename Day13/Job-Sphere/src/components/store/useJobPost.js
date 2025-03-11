import { create } from "zustand";

const useJobPost = create((set, get) => ({
  jobPost: {
    title: "",
    type: "",
    salary: "",
    description: "",
    fullDescription: {
      jobDescription: "",
      jobResponsibility: [],
      jobRequirement: []
    },
    location: "",
    experienceLevel: "",
    company: "",
    logo: "",
    currency: "",
  },
  loading: false,

  setJobPost: (newJobPost) => {
    console.log("newJobPost:",newJobPost);
    set((state) => ({
      jobPost: {
        ...state.jobPost, 
        title: newJobPost.title,
        type: newJobPost.type,
        salary: newJobPost.salary,
        description: newJobPost.description,
        fullDescription: {
          jobDescription: newJobPost.detailsDescription,
          jobResponsibility: newJobPost.jobResponsibilities,
          jobRequirement: newJobPost.jobRequirements,
        },
        location: newJobPost.location,
        experienceLevel: newJobPost.experienceLevel,
        company: newJobPost.company,
        logo: newJobPost.logo,
        currency: newJobPost.currency,
        "isBookMarked": false,
      },
    }));
  },
  
  setLoading: (loading) => set({ loading }),

  postJob: async () => {
    set({ loading: true });

    try {
      console.log(get().jobPost, "mmmmmm")
      const response = await fetch(
        "http://localhost:3000/api/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(get().jobPost),
        },
      );

      const data = await response.json();
      console.log("Job posted successfully:", data);
      return true;
    } catch (error) {
      console.error("Error posting job:", error);
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));

export default useJobPost;
