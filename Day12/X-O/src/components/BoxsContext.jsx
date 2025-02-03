import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const BoxContext = createContext();

const BoxProvider = ({ children }) => {
  const [winner, setWinner] = useState("");
  const [boxs, setBoxs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });
  const [player, setPlayer] = useState("X");
  const changePlayer = () => {
    setPlayer(player == "X" ? "O" : "X");
  };
  const setValue = (index, value) => {
    setBoxs({ ...boxs, [index]: value });
  };
  const reset = () => {
    setBoxs({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" });
    setPlayer("X");
    setWinner("");
  };

  const checkWinner = () => {
    const winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      console.log(boxs[a], boxs[b], boxs[c]);
      if (boxs[a] && boxs[a] === boxs[b] && boxs[a] === boxs[c]) {
        return boxs[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const win = checkWinner();
    if (win) {
      setWinner(win);
      console.log(win + " is the winner");
    }
  }, [boxs]);

  return (
    <BoxContext.Provider
      value={{ boxs, player, changePlayer, setValue, reset, winner }}
    >
      {children}
    </BoxContext.Provider>
  );
};
BoxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BoxContext, BoxProvider };
