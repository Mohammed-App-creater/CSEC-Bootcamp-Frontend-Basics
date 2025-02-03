import TicTacBox from "./TicTacBox";
import { useContext } from "react";
import { BoxContext } from "./BoxsContext";
const TicTacTable = () => {

  const { boxs, reset } = useContext(BoxContext);

  return (
    <section className="relative w-[750px] h-[750px] bg-[var(--color-bg)] dark:bg-[#F8F9FA] flex flex-col items-center justify-center">
      <div className=" col w-full h-full flex justify-evenly ">
        <div className=" w-5 h-full bg-[#f8f9fa] dark:bg-[#130505] rotate-5 rounded-2xl"></div>
        <div className=" w-5 h-full bg-[#f8f9fa] dark:bg-[#130505] rotate-5 rounded-2xl"></div>
      </div>
      <div className=" col w-full h-[750px] flex flex-col justify-evenly absolute ">
        <div className=" h-5 w-full bg-[#f8f9fa] dark:bg-[#130505]  rounded-2xl"></div>
        <div className=" h-5 w-full bg-[#f8f9fa] dark:bg-[#130505]  rounded-2xl"></div>
      </div>

      <div className=" absolute w-full h-full b-amber-200 flex flex-wrap justify-evenly pt-4 gap-5 ">
        {Object.entries(boxs).map(([key, value]) => (
          <TicTacBox key={key}  value={value}  index={Number(key)} />
        ))}
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 mt-4 rounded bg-[var(--color-button)] text-[var(--color-button-text)] cursor-pointer absolute bottom-[-10px] -right-25 m-4"
      >
        <h1>Reset</h1>
      </button>
    </section>
  );
};

export default TicTacTable;
