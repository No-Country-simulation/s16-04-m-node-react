
import './App.css'
import CalendarioProfesional from './views/CalendarioProfesional'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario" element={<CalendarioProfesional />} />  
      </Routes>
    </>
  )
}

export default App
