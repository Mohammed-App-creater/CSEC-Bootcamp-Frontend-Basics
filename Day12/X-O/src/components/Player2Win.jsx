import happy from "../assets/76670084224-removebg-preview.png";
import { useState, useEffect, useContext } from "react";
import { BoxContext } from "./BoxsContext";

const Player2Win = () => {
  const { winner } = useContext(BoxContext);
  const [winer, setWiner] = useState(false);

  useEffect(() => {
    if(winner === 'O'){
      setWiner(true)
    }else{
      setWiner(false)
    }
  }, [winner])

  return (
    <aside
      className={`w-96 h-full  absolute -right-0 top-0 flex  flex-col items-center justify-evenly  player-win  transition-all duration-500 ${winer ? "animate-slide-in-left2" : "animate-slide-in-right2"} overflow-hidden  z-10`}
    >
      <h1 className="text-4xl font-bold text-blue-500  ">Player 2 Win</h1>
      <img src={happy} alt="happy" className="w-96 h-96  shaking-element" />
      <h1 className=" text-[200px]   absolute bottom-8 right-26 -rotate-90 popup-element2 ">
        🎉
      </h1>
      <h1 className=" text-4xl mb-52"> Excellent work</h1>
    </aside>
  );
};

export default Player2Win;
