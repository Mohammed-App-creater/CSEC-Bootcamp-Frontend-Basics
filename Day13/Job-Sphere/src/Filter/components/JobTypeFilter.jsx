import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../components/Data";
import { PropTypes } from 'prop-types';

const JobTypeFilter = ({ Reset }) => {
  const { setSelectedTypes } = useContext(DataContext);
  const [selectedTypes, setSelectedTypes2] = useState([]);

  const handleCheckboxClick = (type) => {
    let updatedTypes = [];

    if (selectedTypes.includes(type)) {
      updatedTypes = selectedTypes.filter((t) => t !== type);
    } else {
      updatedTypes = [...selectedTypes, type];
    }

    setSelectedTypes2(updatedTypes);
    setSelectedTypes(updatedTypes);
  };

  useEffect(() => {
    if (Reset) {
      setSelectedTypes2([]);
      setSelectedTypes([]);
    }
  }, [Reset, setSelectedTypes]);


  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Job Type</h1>
      <div className="flex flex-col  gap-2 rounded-2xl text-[#2F2F2F] border-[#87878766] border-[0.5px] w-full p-2 mt-2">
        {[ 'Full-Time', 'Hybrid', 'Internship', 'Contract', 'Volunteer', 'Remote'].map(
          (type) => (
            <div key={type} className="flex gap-2">
              <input
                type="checkbox"
                id={type}
                checked={selectedTypes.includes(type)}
                onChange={() => handleCheckboxClick(type)}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

JobTypeFilter.propTypes = {
  Reset: PropTypes.bool.isRequired,
};

export default JobTypeFilter;
