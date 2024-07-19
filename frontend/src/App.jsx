import './App.css'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Listado from './views/Listado/Listado.jsx'
<Route path="/listado" element={<Listado />} />
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  )
}

export default App
