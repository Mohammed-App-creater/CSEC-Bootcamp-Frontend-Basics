import { useContext } from "react";
import Filter from "./Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import { DataContext } from "./Data";
import Pagination from "./Pagination";
import NavBar from "./NavBar";
import AD from "./AD";
const Job_search = () => {
  const { jobs, BookMark } = useContext(DataContext);

  return (
    <section className=" flex flex-col  ">
      <NavBar />
      <AD />
      <div className=" flex  justify-evenly items-start gap-4 mt-10 px-24">
        <Filter />
        <section className=" max-w-[630px] flex flex-col gap-2 pt-4 relative">
          <SearchBar />
          {jobs.map((job) => (
            <Jobs
              key={job.id}
              id={job.id}
              Logo={job.logo}
              title={job.title}
              company={job.company}
              isBookMarked={job.isBookMarked}
              BookMark={BookMark}
              description={job.description}
            />
          ))}
          <Pagination />
        </section>
        <SavedJob />
      </div>
    </section>
  );
};

export default Job_search;
