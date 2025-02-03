import happy from '../assets/76670084224-removebg-preview.png'
import { useState, useContext, useEffect } from 'react'
import { BoxContext } from './BoxsContext';
const Player1Win = () => {
    const { winner  } = useContext(BoxContext);
    const [winer, setWiner  ] = useState(false);

    useEffect(() => {
      if(winner === 'X'){
        setWiner(true)
      }else{
        setWiner(false)
      }
    }, [winner])


  return (
    <aside className={`w-96 h-full absolute left-0 top-0 flex  flex-col items-center justify-evenly  player-win z-10 transition-all duration-500 ${winer ? 'animate-slide-in-right' : 'animate-slide-in-left'} z-20`}>

        <h1 className="text-4xl font-bold text-red-500  ">Player 1 Win</h1>
        <img src={happy} alt="happy" className="w-96 h-96 shaking-element"  />
        <h1 className=' text-[200px]  absolute bottom-1 left-12 popup-element '>🎉</h1>
        <h1 className=' text-4xl mb-52'> Excellent work</h1>
    </aside>
  )
}

export default Player1Win