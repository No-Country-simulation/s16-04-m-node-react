import "./App.css";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
