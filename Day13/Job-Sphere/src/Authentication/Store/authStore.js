import { create } from "zustand";
import axios from "axios";

const useRegisterStore = create((set, get) => ({
  email: "",
  password: "",
  isLoading: false,
  errorMass: "",

  LoginValue: (values) => {
    set({
      email: values.email,
      password: values.password,
      isLoading: true,
    });
  },

  Login: async () => {
    const { email, password } = get();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      set({ isLoading: false });
      if (response.status == 201) {
        console.log("User Logged In successfully");
      }
      return true;
    } catch (error) {
      set({ isLoading: false });
      if (error.response) {
        if (error.response.status === 401) {
          set({ errorMass: "Invalid credentials" });
          return false;
        }
        if (error.response.status === 400) {
          set({ errorMass: "User does not exist" });
          return false;
        }
      }
      set({ errorMessage: error.message });
      set({ errorMass: "Registration error please try again" });
      console.error("Registration error:", error);
      return false;
    }
  },
}));

export default useRegisterStore;
