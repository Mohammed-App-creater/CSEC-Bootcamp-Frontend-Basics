import useJobStore from "./store/DataStore";
import { useEffect } from "react";

const Pagination = () => {
  const page = useJobStore((state) => state.page);
  const setPage = useJobStore((state) => state.setPage);
  const totalJobs = useJobStore((state) => state.totalJobs);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const startPage = Math.max(1, Math.min(page, totalJobs - 4));
  const endPage = Math.min(startPage + 3, totalJobs);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );


  useEffect(() => {
    fetchJobs();
  }
  , [fetchJobs, page, setPage, totalJobs]);


  const Next = () => {
    if (page < totalJobs) {
      setPage(page + 1);
    }
  };

  const Prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className=" w-full h-24    flex justify-center items-center gap-4 mt-4 pb-4">
      <button
        onClick={Prev}
        className=" text-white text-[20px] font-light  px-4 py-1 bg-[#0034D1] drop-shadow-lg rounded-sm  "
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => {setPage(p); }}
          className={` text-[#1A1A1A] text-[20px] font-light py-1  px-3 bg-white hover:scale-125  transition-all  border border-[#87878766] drop-shadow-lg rounded-sm ${
            page === p ? "bg-[#0034D1]" : ""
          }`}
        >
          {p}
        </button>
      ))}
      {totalJobs > 6 && totalJobs - 1 > pages[pages.length - 1] && (
        <h1 className=" text-[#1A1A1A] text-[40px] -mx-5 font-light  px-2">
          ...
        </h1>
      )}
      {totalJobs > 6 && totalJobs > pages[pages.length - 1] && (
        <button
          onClick={() => setPage(totalJobs)}
          className={` text-[#1A1A1A] text-[20px] font-light  py-1  px-3 bg-white hover:scale-125  transition-all  border border-[#87878766] drop-shadow-lg rounded-sm ${
            page === totalJobs ? "bg-[#0034D1]" : ""
          }`}
        >
          {totalJobs}
        </button>
      )}

      <button
        onClick={Next}
        className=" text-white text-[20px] px-4 py-1 font-light   bg-[#0034D1]  drop-shadow-lg rounded-sm  "
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
