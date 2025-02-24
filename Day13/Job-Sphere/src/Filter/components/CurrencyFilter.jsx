import useJobStore from "../../components/store/DataStore";

const CurrencyFilter = () => {
  const { setCurrency } = useJobStore();
  const currency = useJobStore((state) => state.filters.currency); // Use Zustand state directly
  
  const handleChange = (e) => {
    const newCurrency = e.target.value; // Get the selected value
  
    setCurrency(newCurrency);
  };
  

  return (
    <div className=" w-full">
      <h1 className=" text-xl ">Currency</h1>
      <select
        value={currency}
        onChange={handleChange}
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="All">ALL</option>
        <option value="USD">Dollar ($)</option>
        <option value="ETB">ETB</option>
      </select>
    </div>
  );
};

export default CurrencyFilter;
