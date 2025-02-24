import BG from "../assets/Frame 191.png";
import Man from "../assets/_0018.png";
import Shapes from "../assets/pattern.png";
const AD = () => {
  return (
    <section className="z-0 ">
      <img src={BG} alt="AD" className=" w-full" />
      <div className=" absolute -top-5 right-0">
        <img src={Man} alt="AD" className="  " />
      </div>
      <img
        src={Shapes}
        alt="AD"
        className=" absolute -top-[30%] right-[50%] -translate-x-[-48%] "
      />
    </section>
  );
};

export default AD;
