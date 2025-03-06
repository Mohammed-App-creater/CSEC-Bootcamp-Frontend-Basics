import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import useJobStore from "../../components/store/DataStore";



const LocationFilter = () => {
  const { setLocation } = useJobStore();
  const location = useJobStore((state) => state.filters.location);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const locationSuggestions = [
    "New York, USA",
    "London, UK",
    "Addis Ababa, Ethiopia",
    "Berlin, Germany",
    "San Francisco, USA",
    "Toronto, Canada",
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Australia",
  ];
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value) {
      setFilteredSuggestions(
        locationSuggestions.filter((loc) =>
          loc.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setFilteredSuggestions([]);
    }
    console.log(value);
    setLocation(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setFilteredSuggestions([]);
    setLocation(suggestion);
  };

  return (
    <div className="w-full relative">
      <h1 className="text-xl">Location</h1>
      <div className="flex items-center gap-2 border-[#87878766] border-[0.5px] rounded-lg w-full p-2 mt-2">
        <CiLocationOn className="text-2xl text-[#2F2F2F]" />
        <input
          type="text"
          value={location}
          placeholder="Enter location"
          onChange={handleInputChange}
          className="w-full outline-none text-[#2F2F2F] bg-transparent"
        />
      </div>

      {filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default LocationFilter;
