import { create } from "zustand";
import axios from "axios";


const useCompanyAuthStore = create((set, get) => ({
    Company: {
    companyName: "",
    industry: "",
    location: "",
    contactPersonName: "",
    contactEmail: "",
    contactPhone: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    socialLinks: [],
},
isLoading: false,
errorMessage: "",


    setValue: (values) => {
        set({
            Company: {
            companyName: values.companyName,
            industry: values.industry,
            location: values.location,
            contactPersonName: values.contactPersonName,
            contactEmail: values.contactEmail,
            contactPhone: values.contactPhone,
            companyEmail: values.companyEmail,
            password: values.password,
            confirmPassword: values.confirmPassword,
            shortDescription: values.shortDescription,
            longDescription: values.longDescription,
            logo: values.logo,
            socialLinks: values.socialLinks,
            isLoading: true,}
        });
        
    },


    register: async () => {
        const Company = get().Company;
        console.log("Company Data:", Company);
        try{
            const response = await axios.post("http://localhost:3000/auth/company/register", {
                companyName: Company.companyName,
                industry: Company.industry,
                location: Company.location,
                contactPersonName: Company.contactPersonName,
                contactEmail: Company.contactEmail,
                contactPhone: Company.contactPhone,
                companyEmail: Company.companyEmail,
                password: Company.password,
                confirmPassword: Company.confirmPassword,
                shortDescription: Company.shortDescription,
                longDescription: Company.longDescription,
                logo: Company.logo,
                socialLinks: Company.socialLinks,
            });
            set({ isLoading: false });
            if (response.status == 201) {
                console.log("Company Registered successfully");
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
            set({ errorMessage: "Registration error please try again" });
            console.error("Registration error:", error);
            return false;
        }
    },

    loginValue: (values) => {
        console.log(values)
        set({Company: {
            companyEmail: values.email,
            password: values.password,
            isLoading: true,
        }});
    },

    login: async () => {
        const { companyEmail, password } = get().Company;
        console.log(companyEmail, password, get().Company)
        try{
            const response = await axios.post("http://localhost:3000/auth/company/login", {
                companyEmail,
                password,
            });
            set({ isLoading: false });
            if (response.status == 201) {
                console.log("Company Logged In successfully");
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
            set({ errorMessage: "Registration error please try again" });
            console.error("Registration error:", error);
            return false;
        }
    },

    logout: async () => {
        try{
            const response = await axios.get("http://localhost:3000/auth/logout");
            if (response.status == 200) {
                console.log("Company Logged Out successfully");
            }
        } catch (error){
            console.error("Logout error:", error);
        }
    },


    logoUpload: async (logo) => {
        console.log("Selected file:", logo);
        try {
            const formData = new FormData();
            formData.append("logo", logo); 
            const response = await axios.post("http://localhost:3000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });   
            if (response.status === 200) { 
                console.log("Logo uploaded successfully", response.data);
                return `http://localhost:3000/Logo/${response.data}`; 
            }
        } catch (error) {
            console.error("Upload error:", error);
            return false;
        }
    }
    




}));


export default useCompanyAuthStore;