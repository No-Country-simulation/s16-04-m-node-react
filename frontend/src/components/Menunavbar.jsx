import { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import '../css/menunavbar.css';
import { Flex } from "@radix-ui/themes";
import { Link, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const Menunavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const signOut = useSignOut();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <>
      <Flex className="contentMenunav" onClick={toggleMenu}>
        <RiArrowDownSLine />
      </Flex>
      {isMenuOpen && (
        <Flex className="dropdown-menu">
          <Link to={'/dashboard/profile'}>
          <div className="dropdown-item">Perfil</div>
          </Link>
          <div className="dropdown-item" onClick={handleSignOut}>Desconectarse</div>
        </Flex>
      )}
    </>
  );
};

export default Menunavbar;

