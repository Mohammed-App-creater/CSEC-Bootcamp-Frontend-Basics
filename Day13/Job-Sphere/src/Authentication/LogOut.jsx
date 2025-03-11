import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("LoggedIn"); 
    navigate("/"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-10 bg-[#0034D1] rounded text-white hover:scale-110 transition-all"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
