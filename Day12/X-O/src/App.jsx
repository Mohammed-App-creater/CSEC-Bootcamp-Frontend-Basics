import DarkModeToggle from "./components/DarkModeToggle";
import TicTacTable from "./components/TicTacTable";
import { BoxProvider } from "./components/BoxsContext";
import Player1Win from "./components/Player1Win";
import Player2Win from "./components/Player2Win";

const App = () => {
  return (
    <BoxProvider>

        <DarkModeToggle />
      <div className="min-h-screen relative flex flex-col items-center justify-center bg-[var(--color-bg)] dark:bg-[#F8F9FA] text-[var(--color-text) dark:text-[#130505] overflow-hidden">
        <Player1Win />
        <Player2Win />
        <TicTacTable />
      </div>
    </BoxProvider>
  );
};

export default App;
