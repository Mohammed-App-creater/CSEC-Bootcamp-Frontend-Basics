import { GrLocationPin } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { useState, useRef } from "react";

const Filter = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(2000);
  const minLimit = 20;
  const maxLimit = 2000;

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

  return (
    <section className=" w-1/3 h-fit flex justify-center items-center p-4">
      <div className=" w-[65%]  border-[#87878766] border-[0.5px] p-4 rounded-2xl flex flex-col justify-center items-center gap-2 drop-shadow-lg bg-white">
        <h1 className=" text-2xl font-semibold mb-2">Filter</h1>
        <div className=" w-full">
          <label htmlFor="Date" className=" text-xl ">
            Date Posted
          </label>
          <select
            name="Date"
            id="Date"
            className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2"
          >
            <option value="Last 24 Hours">Last 24 Hours</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
        <div className=" w-full">
          <h1 className=" text-xl ">Job Type</h1>
          <div className="flex flex-col  gap-2 rounded-2xl text-[#2F2F2F] border-[#87878766] border-[0.5px] w-full p-2 mt-2">
            <div className="flex  gap-2">
              <input type="checkbox" name="Full Time" id="Full Time" />
              <label htmlFor="Full Time">Full Time</label>
            </div>
            <div className="flex  gap-2">
              <input
                type="checkbox"
                className=" active:bg-amber-300"
                name="Part Time"
                id="Part Time"
              />
              <label htmlFor="Part Time">Part Time</label>
            </div>
            <div className="flex  gap-2">
              <input type="checkbox" name="Internship" id="Internship" />
              <label htmlFor="Internship">Internship</label>
            </div>
            <div className="flex  gap-2">
              <input type="checkbox" name="Contract" id="Contract" />
              <label htmlFor="Contract">Contract</label>
            </div>
            <div className="flex  gap-2">
              <input type="checkbox" name="Volunteer" id="Volunteer" />
              <label htmlFor="Volunteer">Volunteer</label>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h1 className=" text-xl ">Location</h1>
          <button className="flex justify-start items-center gap-2 rounded-lg text-[#2F2F2F] border-[#87878766] border-[0.5px] w-full p-2 mt-2">
            <CiLocationOn className=" text-2xl text-[#2F2F2F]" /> Location
          </button>
        </div>
        <div className=" w-full">
          <h1 className=" text-xl ">Experience Level</h1>
          <select className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2">
            <option value="Entry">Entry</option>
            <option value="Intermediate" selected>
              Intermediate
            </option>
            <option value="Senior">Senior</option>
          </select>
        </div>

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
                }% - 10px)`,
                top: "-5px",
                selected: { backgroundColor: "transparent" },
              }}
            />

            <span
              className="absolute text-sm text-gray-800  cursor-pointer salarySpan"
              style={{
                left: `calc(${
                  ((max - minLimit - 100) / (maxLimit - minLimit)) * 100
                }% - 10px)`,
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
                }% - 10px)`,
                top: "-5px",
              }}
            />

            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={min}
              onChange={(e) =>
                setMin(Math.min(Number(e.target.value), max - 1))
              }
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={max}
              onChange={(e) =>
                setMax(Math.max(Number(e.target.value), min + 1))
              }
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
                type="number"
                className=" rounded border-[#87878766] border-[0.5px] w-10 h-6 "
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="Max" className=" text-sm ">
                {" "}
                To
              </label>
              <input
                type="number"
                className="p-2 rounded border-[#87878766] border-[0.5px] w-10 h-6"
              />
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h1 className=" text-xl ">Currency</h1>
          <select className="p-2 rounded-lg border-[#87878766] border-[0.5px] w-full flex justify-center items-center text-gray-600 mt-2">
            <option value="Dollar">Dollar ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="ETB">ETB</option>
          </select>
        </div>
        <button className=" w-[80%] bg-[#0034D1] text-white p-2 rounded-lg mt-4">
          Reset all Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
