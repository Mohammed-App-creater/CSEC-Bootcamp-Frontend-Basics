import { useContext } from "react";
import { DataContext } from "../../components/Data";

const CurrencyFilter = () => {
  const { Currency } = useContext(DataContext);
  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Currency</h1>
      <select
        onChange={(e) => {
          Currency(e.target.value);
          console.log(e.target.value);
        }}
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="USD">Dollar ($)</option>
        <option value="All">ALL</option>
        <option value="ETB">ETB</option>
      </select>
    </div>
  );
};

export default CurrencyFilter;
