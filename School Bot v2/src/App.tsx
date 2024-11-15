import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Chat/Chat.tsx'
import Chronology from "./Pages/Chronology/Chronology.tsx"
import './App.css'

function App() {
  return (
    <div>
      app page
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path = "/Chronology" element={<Chronology/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
