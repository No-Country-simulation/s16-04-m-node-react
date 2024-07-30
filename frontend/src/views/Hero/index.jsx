import { Button, Flex} from "@radix-ui/themes";
import { slide as Menu } from 'react-burger-menu';
import "./css/hero.css";
import '../../css/dashboard.css';
import Logo from "../../assets/CHEALTH.png";
import MenuNavHiro from "./components/MenuNavHiro";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ServiciosHiro from "./components/ServiciosHiro";
import Especialidades from "./components/Especialidades";
import Blog from "./components/Blog";


const Hiro = () => {
  const [active, setActive] = useState(false);



  return (
    <>
      <Flex className="containerHero">
      
      <div className="menuEscritorio">
         <Menu right isOpen={active} onStateChange={(state) => setActive(state.isOpen)} >
          <MenuNavHiro isBurgerMenu={true} />
        </Menu>
      </div>
       

        <div className="headHero">
          <img src={Logo} alt="logo" />
          <section className="menuNav">
            <MenuNavHiro isBurgerMenu={false} />
          </section>
          <Link to="login">
          <Button>Portal Acceso</Button>
          </Link >
        </div>

        <section className="bodyHero">
          <p className="textHero">
            Transforme la manera en que gestiona los turnos médicos con nuestra
            aplicación intuitiva. Experimente un proceso de gestion más fluido,
            acceso conveniente a sus registros y una comunicación mejorada con
            sus pacientes.
          </p>
        </section>
      </Flex>
      <ServiciosHiro/>
      <Especialidades/>
      <Blog/>
      <ScrollToTopButton/>
    </>
  );
};

export default Hiro;


