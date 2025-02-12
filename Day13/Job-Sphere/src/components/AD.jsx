import BG from '../assets/Frame 191.png'
import Man from '../assets/Frame 192.png'
import Shapes from '../assets/pattern.png'
const AD = () => {
  return (
    <section>
        <img src={BG} alt="AD" className=" w-full" />
        <img src={Man} alt="AD" className=" absolute -top-5 right-0 " />
        <img src={Shapes} alt="AD" className=" absolute -top-[30%] right-[50%] -translate-x-[-48%] " />
    </section>
  )
}

export default AD