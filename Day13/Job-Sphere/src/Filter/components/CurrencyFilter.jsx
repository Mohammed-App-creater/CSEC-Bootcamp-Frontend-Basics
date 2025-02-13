import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DataContext } from "../../components/Data";

const CurrencyFilter = ({ Reset }) => {
  const { setCurrency } = useContext(DataContext);
  const [currency, setCurrency2] = useState("All");
  const hadleChange = (e) => {
    setCurrency(e.target.value);
    setCurrency2(e.target.value);
  };
  useEffect(() => {
    if (Reset) {
      setCurrency("All");
      setCurrency2("All");
    }
  }, [setCurrency, Reset]);
  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Currency</h1>
      <select
        value={currency}
        onChange={hadleChange}
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="All">ALL</option>
        <option value="USD">Dollar ($)</option>
        <option value="ETB">ETB</option>
      </select>
    </div>
  );
};

CurrencyFilter.propTypes = {
  Reset: PropTypes.bool.isRequired,
};

export default CurrencyFilter;
