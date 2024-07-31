import { Box, Button, Flex } from "@radix-ui/themes";
import { slide as Menu } from 'react-burger-menu';
import "./css/hero.css";
import '../../css/dashboard.css';
import Logo from "../../assets/CHEALTH.png";
import MenuNavHiro from "./components/MenuNavHiro";
//import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ServiciosHiro from "./components/ServiciosHiro";
import Especialidades from "./components/Especialidades";
import Blog from "./components/Blog";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import { CgDarkMode } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slice/appearanceSlice.js";

const Hiro = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const handletheme = () => {
    dispatch(toggleTheme());
  };

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

          <Box className="iconHero">
            <CgDarkMode onClick={handletheme} />
          </Box>
          <Link to='login'>
          <Button className="btnAcceso">Portal Acceso</Button>
          </Link>
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
      <div id="servicios">
        <ServiciosHiro />
      </div>
      <div id="especialidades">
        <Especialidades />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Hiro;


