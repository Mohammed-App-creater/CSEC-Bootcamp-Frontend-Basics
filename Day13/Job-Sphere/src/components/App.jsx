// import NavBar from "./NavBar"
// import AD from "./AD"
// import Job_search from "./Job_search"
import Login from "../Authentication/Login"
import { Data } from "./Data"


function App() {
  

  return (
    <Data>
      <div>
        {/* <NavBar />
        <AD />    
        <Job_search /> */}
          <Login />
      </div>
    </Data>
  )
}

export default App
