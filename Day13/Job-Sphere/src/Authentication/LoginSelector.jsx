import { useState } from "react";
import PropTypes from "prop-types";

const LoginSelector = ({ setRole }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleSelect = (role) => {
    setSelectedRole(role);
    setRole(role);
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 -my-6">
      <div className="flex gap-6">
        <div
          onClick={() => handleSelect("Jobseeker")}
          className={`cursor-pointer border rounded-lg flex justify-center items-center px-0 py-3 h-fit  w-40  ${
            selectedRole === "Jobseeker"
              ? "bg-[#0034D1] text-white border-[#0034D1]"
              : "bg-white text-gray-800 border-gray-300"
          } hover:shadow-md transition`}
        >
          Jobseeker
        </div>

        <div
          onClick={() => handleSelect("Company")}
          className={`cursor-pointer border rounded-lg flex justify-center items-center px-0 py-3 h-fit  w-40 ${
            selectedRole === "Company"
              ? "bg-[#0034D1] text-white border-[#0034D1]"
              : "bg-white text-gray-800 border-gray-300"
          } hover:shadow-md transition`}
        >
          Company
        </div>
      </div>
    </div>
  );
};
LoginSelector.propTypes = {
  setRole: PropTypes.func.isRequired,
};

export default LoginSelector;
