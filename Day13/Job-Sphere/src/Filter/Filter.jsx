import DateFilter from "./components/DateFilter";
import JobTypeFilter from "./components/JobTypeFilter";
import LocationFilter from "./components/LocationFilter";
import ExperienceFilter from "./components/ExperienceFilter";
import SalaryFilter from "./components/SalaryFilter";
import CurrencyFilter from "./components/CurrencyFilter";
import useJobStore from "../components/store/DataStore";

const Filter = () => {
 const reset = useJobStore((state) => state.resetFilters);

  return (
    <section className="  h-fit flex justify-center items-center p-4">
      <div className=" w-90  border-[#87878766] border-[0.5px] p-4 rounded-2xl flex flex-col justify-center items-center gap-2 drop-shadow-lg bg-white">
        <h1 className=" text-2xl font-semibold mb-2">Filter</h1>
        <DateFilter Reset={reset} />
        <JobTypeFilter Reset={reset} />
        <LocationFilter Reset={reset} />
        <ExperienceFilter Reset={reset} />
        <SalaryFilter Reset={reset} />
        <CurrencyFilter Reset={reset} />
        <button
          onClick={reset}
          className=" w-[80%] bg-[#0034D1] text-white p-2 rounded-lg mt-4"
        >
          Reset all Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
