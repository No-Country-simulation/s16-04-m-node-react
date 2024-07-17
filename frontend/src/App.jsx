import './App.css'
import Hero from './views/Hero/Hero.jsx'
import Login from './views/Login'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
          
      </Routes>
    </>
  )
}

export default App
