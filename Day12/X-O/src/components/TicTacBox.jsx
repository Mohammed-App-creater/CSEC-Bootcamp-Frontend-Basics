import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { BoxContext } from "./BoxsContext";

const TicTacBox = ({ value, index }) => {
  const [clicked, setClicked] = useState(false);
  const [Players, setPlayers] = useState("");
  const { changePlayer, player, setValue } = useContext(BoxContext);
  const handleClick = () => {
    if (!clicked) {
      setClicked(!clicked);
      changePlayer();
      setPlayers(player);
      setValue(index, player);
    }
  };
  useEffect(() => {
    if (!value) {
      setClicked(false);
    }
  }, [value]);  
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={` w-56 h-56   rounded-2xl flex justify-center items-center pencil-cursor-white dark:pencil-cursor-black   `}
    >
      <h1
        className={` text-9xl font-bold  ${Players == "X" ? "text-red-500 " : "text-blue-500"}`}
      >
        {value}
      </h1>
    </div>
  );
};

TicTacBox.propTypes = {
  value: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default TicTacBox;
