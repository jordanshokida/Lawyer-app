import { BrowserRouter } from "react-router"
import "./App.css"
import Router from "./Router"
import NavBar from "../components/NavBar/NavBar"

const App = () => {
  return (
    <div className="bg-[#fdf6e3] min-h-screen">
      <BrowserRouter>
        <NavBar/>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
