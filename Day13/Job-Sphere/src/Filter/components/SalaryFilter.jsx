import { useEffect, useState } from "react";
import useJobStore from "../../components/store/DataStore";
import RangeSlider from "react-range-slider-input";
import "./Salary.css";

const SalaryFilter = () => {
  const { setSalaryRange } = useJobStore();
  const [min, setMin] = useState(35000);
  const [max, setMax] = useState(200000);
  const [value, setValue] = useState([min, max]);
  const minLimit = 200;
  const maxLimit = 500_000;

  useEffect(() => {
    setSalaryRange({ min: min, max: max });
  }, [value, min, max, setSalaryRange]);

  useEffect(() => {
    setMin(value[0]);
    setMax(value[1]);
  }, [max, min, value]);

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex flex-col gap-6   items-start text-[#2F2F2F] mb-2 ">
        <h1 className="text-xl">Salary Range</h1>
        <div className=" w-full flex justify-center items-center y-8 gap-2 relative">
          <span
            className="absolute text-sm text-gray-800 cursor-pointer salarySpan"
            style={{
              left: `calc(${
                ((min - minLimit + 20) / (maxLimit - minLimit)) * 100
              }% - 10px)`,
              top: "-24px",
            }}
          >
            ${min}
          </span>

          <span
            className="absolute text-sm text-gray-800  cursor-pointer salarySpan"
            style={{
              left: `calc(${
                ((max - minLimit - 100) / (maxLimit - minLimit)) * 100
              }% - 40px)`,
              top: "-24px",
              selected: { backgroundColor: "transparent" },
            }}
          >
            ${max}
          </span>
          <RangeSlider
            max={maxLimit}
            min={minLimit}
            value={value}
            onInput={setValue}
            defaultValue={[35000, 200000]}
          />
        </div>
      </div>
      <div className=" w-full flex flex-col gap-1 items-start text-[#2F2F2F] ">
        <h1 className=" text-xl  "> Input Manually</h1>

        <div className="flex justify-center items-center gap-12">
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="Min" className=" text-sm ">
              {" "}
              From
            </label>
            <input
              onChange={(e) => setMin(e.target.value)}
              type="number"
              className=" rounded border-[#87878766] focus-within:w-24 appearance-none border-[0.5px] w-10 h-6 "
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="Max" className=" text-sm ">
              {" "}
              To
            </label>
            <input
              onChange={(e) => setMax(e.target.value)}
              type="number"
              className="p-2 rounded appearance-none focus-within:w-24 border-[#87878766] border-[0.5px] w-10 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryFilter;
