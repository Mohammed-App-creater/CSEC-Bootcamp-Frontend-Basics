const DateFilter = () => {
  return (
    <div className=" w-full">
      <label htmlFor="Date" className=" text-xl ">
        Date Posted
      </label>
      <select
        name="Date"
        id="Date"
        className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
      >
        <option value="Last 24 Hours">Last 24 Hours</option>
        <option value="Last Week">Last Week</option>
        <option value="Last Month">Last Month</option>
      </select>
    </div>
  );
};

export default DateFilter;
