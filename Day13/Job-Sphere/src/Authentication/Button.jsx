import { useState, useEffect } from "react";
import useCompanyAuthStore  from './Store/CompanyAuthStore.js';
const Button = () => {
  const { isLoading } = useCompanyAuthStore(); 
  const [dots, setDots] = useState("");

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
      }, 500);
    } else {
      setDots("");
    }

    return () => clearInterval(interval);
  }, [isLoading]);


  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`py-2 px-8 rounded text-white ${
        isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#0034D1]"
      }`}
    >
      {isLoading ? `Loading${dots}` : "Submit"}
    </button>
  );
};

export default Button;
