import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home.tsx"
import Chronology from "./Pages/Chronology/Chronology.tsx"
import AccountHome from "./Pages/AccountHome/AccountHome.tsx"
import AccessPage from "./Pages/AccessPage/AccessPage.tsx"
import './App.css'

function App() {
  return (
    <div>
      app page
      <BrowserRouter>
          <Routes>
            <Route path="/AccessPage" element={<AccessPage />} />
            <Route path = "/AccountHome" element={<AccountHome/>} />
            <Route path="/" element={<Home />} />
            <Route path = "/Chronology" element={<Chronology/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
