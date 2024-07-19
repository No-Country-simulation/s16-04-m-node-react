import { Flex } from "@radix-ui/themes"
import { FiHome } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { Link } from "react-router-dom";

const SliderMenu = () => {
  return (
    <>
        <Flex
        direction="column" 
        gap="2rem" 
        style={{ minHeight: "calc(100vh - 64px)", width: "250px", backgroundColor: '#57CED4', padding: '1rem',fontWeight:'500' }}
      >
        <Link to='home'><Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <FiHome /> HOME
        </Flex>
        </Link>
        <Link to='calendario'>
         <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <CiCalendar /> CALENDARIO
        </Flex>
        </Link>
       
        <Link to='paciente'>
         <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <LuUsers /> PACIENTE
        </Flex>
        </Link>
       
      </Flex>
    </>
  )
}

export default SliderMenu