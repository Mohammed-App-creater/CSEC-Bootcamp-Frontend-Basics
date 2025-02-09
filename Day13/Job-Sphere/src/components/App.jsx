import NavBar from "./NavBar"
import AD from "./AD"
import Job_search from "./Job_search"
import { Data } from "./Data"


function App() {
  

  return (
    <Data>
      <div>
        <NavBar />
        <AD />    
        <Job_search />
      </div>
    </Data>
  )
}

export default App
