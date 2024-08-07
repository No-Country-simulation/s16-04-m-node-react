import "./App.css";
import { PatientsHome } from "./views/PatientsHome/PatientsHome";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
import Calendario from "./views/CalendarioProfesional";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Hero from "./views/Hero";
import Paciente from "./views/Paciente/Paciente";
import Historial from "./views/Historial/Historial";
import Profile from "./views/Profile";
import Registro from "./views/Registro";
import UserCitas from "./views/UserCitas";
import HistorialCita from './views/HistorialCitas'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} >
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route element={<AuthOutlet fallbackPath="/login" />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/calendario" element={<Calendario />} />
            <Route path="/dashboard/paciente" element={<Paciente />} />
            <Route path="/dashboard/citas" element={<UserCitas />} />
            <Route path="/dashboard/tuscitas" element={<HistorialCita />} />
            <Route
              path="/dashboard/paciente/historial"
              element={<Historial />}
            />
          </Route>
          <Route path="/patientshome" element={<PatientsHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
