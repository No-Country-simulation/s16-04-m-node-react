import Logo from "../../assets/CHEALTH.png";
import "../../css/login.css";
import Registro from "./Registro";

const RegistroUsuario = () => {
  
    return (
      <div className="flex h-screen">
        <div className="w-1/5 bg-[#ade8f4] flex items-center justify-center sidebar">
          <img
            src={Logo}
            className="max-w-full max-h-full"
            style={{ maxWidth: "12rem", maxHeight: "12rem" }}
          />
        </div>
        <div className="login-container">
           <Registro />
        </div> 
      </div>
    );
  };
  
  export default RegistroUsuario;
  