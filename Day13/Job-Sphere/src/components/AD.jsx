import BG from "../assets/Frame 191.png";
import Man from "../assets/Frame 192.png";
import Shapes from "../assets/pattern.png";
const AD = () => {
  return (
    <section className="z-0 w-full max-h-[524px] object-cover relative  ">
      <img src={BG} alt="AD" className=" w-full " />
      <div className=" absolute top-8 right-0 ">
        <img src={Man} alt="AD" className="  " />
      </div>
      <img
        src={Shapes}
        alt="AD"
        className=" top-0 bottom-0 left-0 right-0 absolute w-full h-full "
      />
    </section>
  );
};

export default AD;
