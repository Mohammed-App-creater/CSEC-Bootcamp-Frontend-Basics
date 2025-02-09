import { useContext } from "react";
import Filter from "./Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import { DataContext } from "./Data";
const Job_search = () => {
  const jobs = useContext(DataContext);
  console.log(jobs);


  return (
    <section className=" flex  justify-evenly items-start gap-4 mt-10 px-24">
      <Filter />
      <section className=" max-w-[630px] flex flex-col gap-2 pt-4" >
        <SearchBar />
        {jobs.map((job) => (
        <Jobs key={job.id} Logo={job.logo} title={job.title} company={job.company} isBookMarked={job.isBookMarked} description={job.description} />
        ))}
      </section> 
      <SavedJob />
    </section>
  );
};

export default Job_search;
