import "./App.css";
import Dashboard from "./views/Dashboard";
import Home from './views/Home/Home';
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
import Calendario from './views/CalendarioProfesional'
import Hiro from './views/Hero/Hero'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hiro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/calendario" element={<Calendario/>} />
          <Route path="/dashboard/paciente" element={'paciente'} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

