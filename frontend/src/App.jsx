import "./App.css";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
import Calendario from "./views/CalendarioProfesional";
import Hero from "./views/Hero/Hero";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/login" element={<Login />} />
        <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/calendario" element={<Calendario />} />
          <Route path="/dashboard/paciente" element={"paciente"} />
        </Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
