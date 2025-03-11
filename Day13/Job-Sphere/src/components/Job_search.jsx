import Filter from "../Filter/Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import useJobStore from "./store/DataStore";
import AD from "./AD";
import { useEffect } from "react";
const Job_search = () => {
  const originalData = useJobStore((state) => state.originalData);
  const filteredData = useJobStore((state) => state.filteredData);
  const BookMark = useJobStore((state) => state.BookMark);
  const checkIsFiltered = useJobStore((state) => state.checkIsFiltered);
  const filters = useJobStore((state) => state.filters);
  const isFilterd = useJobStore((state) => state.isFiltered);
  const jobs = isFilterd ? filteredData : originalData;

  useEffect(() => {
    checkIsFiltered();
  }, [checkIsFiltered, filters]);
  

  return (
    <section className=" flex flex-col  ">
      <AD />
      <div className=" flex  justify-evenly items-start gap-4 mt-10 px-24">
        <Filter />
        <section className=" max-w-[630px] flex flex-col gap-2 pt-4 relative">
          <SearchBar />
          {jobs.map((job) => {
            return (
              <Jobs
                Job={job}
                BookMark={BookMark}
                key={job._id}
              />
            );
          })}
          <Pagination />
        </section>
        <SavedJob />
      </div>
    </section>
  );
};

export default Job_search;
