import { Flex } from "@radix-ui/themes"
import { FiHome } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { Link } from "react-router-dom";
import '../css/dashboard.css'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const SliderMenu = () => {

  const [active, setActive] = useState(false)
  const [menu, setMenu] = useState('home')

  const handleMenu = ()=>{
    setActive(!active)
  }

  return (
    <>
    <div className="hamburger-menu" >
        <span className="iconMenuslider"><MdMenu onClick={handleMenu}/></span>
      </div>
        <Flex
        direction="column" 
        gap="2rem" 
          className={`nav-dash ${active ? 'active':''}`}
        style={{ minHeight: "calc(100vh - 64px)", width: "250px", backgroundColor: '#57CED4', padding: '1rem',fontWeight:'500' }}
      >
         <div className="menu-close" >
        <span className="iconMenuslider"><IoClose onClick={handleMenu}/></span>
      </div>
        <Link to='home'><Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        className={`${menu === 'home'?"iconSliderMenu":''}`}
        onClick={()=>setMenu('home')}
        >
        <FiHome /> HOME
        </Flex>
        </Link>
        <Link to='calendario'>
         <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        className={`${menu === 'calendario'?"iconSliderMenu":''}`}
        onClick={()=>setMenu('calendario')}
        >
        <CiCalendar /> CALENDARIO
        </Flex>
        </Link>
       
        <Link to='paciente'>
         <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        className={`${menu === 'paciente'?"iconSliderMenu":''}`}
        onClick={()=>setMenu('paciente')}
        >
        <LuUsers /> PACIENTE
        </Flex>
        </Link>
        <Link to='tuscitas'>
         <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <LuUsers /> TUS CITAS
        </Flex>
        </Link>
       
      </Flex>
    </>
  )
}

export default SliderMenu
