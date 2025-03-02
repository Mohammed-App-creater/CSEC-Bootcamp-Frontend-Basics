import Filter from "../Filter/Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import useJobStore from "./store/DataStore";
import AD from "./AD";
const Job_search = () => {
  const jobs = useJobStore((state) =>
    state.isFiltered ? state.filteredData : state.originalData,
  );
  const BookMark = useJobStore((state) => state.BookMark);
  

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
                key={job.id}
                id={job.id}
                Logo={job.logo || "https://via.placeholder.com/150"}
                title={job.title}
                company={job.company}
                location={job.location}
                Type={job.type}
                isBookMarked={job.isBookMarked}
                BookMark={BookMark}
                description={job.description}
                Salary={job.salary}
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
