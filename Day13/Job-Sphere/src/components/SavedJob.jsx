import { IoMdClose } from "react-icons/io";
const SavedJob = () => {
  return (
    <section className=" w-85 flex justify-center bg-white rounded-2xl shadow-2xl border-1 border-[#87878766] mt-4 z-10 ">
      <div className=" w-full h-fit flex flex-col gap-6 py-6 px-4 items-center">
        <h1 className=" text-3xl text-[#2F2F2F] font-bold">Saved Jobs</h1>
        <div className=" w-full h-fit flex gap-4  shadow-md border-1 border-[#87878766] rounded-2xl p-4 relative">
          <button className=" absolute top-5 right-3 text-[#2F2F2F] text-2xl">
            <IoMdClose />
          </button>
          <div className=" w-12 h-12">
            <img src="https://logo.clearbit.com/google.com" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" text-2xl font-semibold">UI/UX Designer</h2>
            <p className="">Barone LLC.</p>
            <div className="flex gap-2">
              <p className=" text-[#1A1A1A] text-[14px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                Remote
              </p>
              <p className=" text-[#1A1A1A] text-[14px] font-light  px-2 bg-[#EBEBEB] rounded-sm ">
                $200 - $1,200
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavedJob;
