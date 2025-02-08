import Filter from "./Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
const Job_search = () => {
  return (
    <section className=" flex  justify-evenly items-start gap-4 mt-10 px-24">
      <Filter />
      <section className=" max-w-[630px] flex flex-col gap-2 pt-4" >
        <SearchBar />
        <Jobs />
      </section> 
      <SavedJob />
    </section>
  );
};

export default Job_search;
