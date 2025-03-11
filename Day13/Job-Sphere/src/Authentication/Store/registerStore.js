import { create } from "zustand";
import axios from "axios";

const useRegisterStore = create((set, get) => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isLoading: false,  
  errorMass: "",

  registerValue: (values) => {
    set({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      isLoading: true,
    });

  },

  register: async () => {
    const { firstName, lastName, email, password } = get();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
  
      set({ isLoading: false });
      if(response.status == 201){
        console.log("User registered successfully");
      }
      return true;
    } catch (error) {
      set({ isLoading: false }); 
      if (error.response) {
        if (error.response.status === 409) {
          set({errorMass: "User already exists"});
          return false;
        }
      }
      set({ errorMessage: error.message });
      set({errorMass: "Registration error please try again" })
      console.error("Registration error:", error);
      return false;
    }
  },
  
}));

export default useRegisterStore;
