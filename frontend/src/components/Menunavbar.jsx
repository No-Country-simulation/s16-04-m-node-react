import { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import '../css/menunavbar.css';
import { Flex } from "@radix-ui/themes";

const Menunavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Flex className="contentMenunav" onClick={toggleMenu}>
        <RiArrowDownSLine />
      </Flex>
      {isMenuOpen && (
        <Flex className="dropdown-menu">
          <div className="dropdown-item">Perfil</div>
          <div className="dropdown-item">Desconectarse</div>
        </Flex>
      )}
    </>
  );
};

export default Menunavbar;

