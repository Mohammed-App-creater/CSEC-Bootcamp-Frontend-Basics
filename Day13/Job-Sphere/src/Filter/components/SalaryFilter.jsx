import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../components/Data";
import RangeSlider from "react-range-slider-input";
import PropTypes from "prop-types";
import "./Salary.css";

const SalaryFilter = ({ Reset }) => {
  const { setSalaryRange } = useContext(DataContext);
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(500000);
  const [value, setValue] = useState([1000, 500000]);
  const minLimit = 200;
  const maxLimit = 500_000;

  

  useEffect(() => {
    setSalaryRange(min, max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);

  useEffect(() => {
    if (Reset) {
      setMin(1000);
      setMax(500000);
    }
  }, [Reset]);

  useEffect(()=>{
    setMin(value[0])
    setMax(value[1])
  }, [value])

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
          <RangeSlider max={maxLimit} min={minLimit} value={value} onInput={setValue}  defaultValue={[min, max]}   />
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
              value={min}
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
              value={max}
              className="p-2 rounded appearance-none focus-within:w-24 border-[#87878766] border-[0.5px] w-10 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SalaryFilter.propTypes = {
  Reset: PropTypes.bool.isRequired,
};

export default SalaryFilter;
