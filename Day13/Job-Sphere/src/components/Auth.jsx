import Google from '../assets/Google - Original.png'
import Apple from '../assets/Apple - Original.png'
import Facebook from '../assets/Facebook - Original.png'
import Linkedin from '../assets/Linkedin - Original.png'
const Auth = () => {
  return (
    <div className=" w-[400px] flex gap-4 items-center justify-between">
        <div className=" w-18 h-18 flex justify-center items-center border border-[#87878762] rounded-lg ">
            <img src={Google} className=" w-10 h-10 bg-white object-contain" alt="amazon logo" />
        </div> 
        <div className=" w-18 h-18 flex justify-center items-center border border-[#87878762] rounded-lg ">
            <img src={Apple} className=" w-10 h-10 object-contain" alt="amazon logo" />
        </div> 
        <div className=" w-18 h-18 flex justify-center items-center border border-[#87878762] rounded-lg ">
            <img src={Facebook} className=" w-10 h-10 object-contain" alt="amazon logo" />
        </div> 
        <div className=" w-18 h-18 flex justify-center items-center border border-[#87878762] rounded-lg ">
            <img src={Linkedin} className=" w-10 h-10 object-contain" alt="amazon logo" />
        </div> 
    </div>
  )
}

export default Auth