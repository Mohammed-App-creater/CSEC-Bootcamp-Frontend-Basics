import { useEffect, useRef, useState, useContext } from "react";
import { GrLocationPin } from "react-icons/gr";
import { DataContext } from "../../components/Data";

const SalaryFilter = () => {
  const { salarySpan } = useContext(DataContext);
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(500000);
  const minLimit = 200;
  const maxLimit = 500_000;

  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const handleDrag = (e) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const trackRect = track.getBoundingClientRect();
    const position = e.clientX || e.touches?.[0]?.clientX;
    let percentage = (position - trackRect.left) / trackRect.width;

    percentage = Math.max(0, Math.min(1, percentage));
    const newValue = Math.round(minLimit + percentage * (maxLimit - minLimit));

    if (dragging === "min" && newValue < max - 200) {
      setMin(newValue);
    } else if (dragging === "max" && newValue > min + 200) {
      setMax(newValue);
    }
  };
  const startDrag = (type) => {
    setDragging(type);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    setDragging(null);
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", stopDrag);
  };

  useEffect(() => {
    salarySpan(min, max);
  }, [min, max]);
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full">
        <h1 className="text-xl">Salary Range</h1>
        <div className="relative mt-6 h-10" ref={trackRef}>
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full transform -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 bg-blue-600 h-2 rounded-full transform -translate-y-1/2"
            style={{
              left: `${((min - minLimit) / (maxLimit - minLimit)) * 100}%`,
              right: `${
                100 - ((max - minLimit) / (maxLimit - minLimit)) * 100
              }%`,
            }}
          ></div>

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
          <GrLocationPin
            onDrag={() => startDrag("min")}
            className="absolute text-2xl text-gray-800 cursor-pointer"
            style={{
              left: `calc(${
                ((min - minLimit + 20) / (maxLimit - minLimit)) * 100
              }% - 8px)`,
              top: "-5px",
              selected: { backgroundColor: "transparent" },
            }}
          />

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
          <GrLocationPin
            onDrag={() => startDrag("max")}
            className="absolute text-2xl text-gray-800 cursor-pointer  "
            style={{
              left: `calc(${
                ((max - minLimit - 50) / (maxLimit - minLimit)) * 100
              }% - 16px)`,
              top: "-5px",
            }}
          />

          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={min}
            onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          />
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={max}
            onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
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

export default SalaryFilter;
