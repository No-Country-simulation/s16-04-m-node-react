import "./App.css";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
import Calendario from "./views/CalendarioProfesional";
import Hero from "./views/Hero/Hero";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Paciente from "./views/Paciente/Paciente";
import Registro from "./views/Registro";







function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />}/> 
        <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/calendario" element={<Calendario />} />
          <Route path="/dashboard/paciente" element={<Paciente />} />
        </Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
