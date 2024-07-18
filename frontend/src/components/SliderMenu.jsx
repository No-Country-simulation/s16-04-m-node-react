import { Flex } from "@radix-ui/themes"
import { FiHome } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

const SliderMenu = () => {
  return (
    <>
        <Flex
        direction="column" // Configura el Flex en dirección de columna
        gap="2rem" // Configura el gap entre los elementos
        style={{ minHeight: "calc(100vh - 64px)", width: "250px", backgroundColor: '#0096c7', padding: '1rem' }}
      >

        <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <FiHome /> HOME
        </Flex>
        <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <CiCalendar /> CALENDARIO
        </Flex>
        <Flex
        style={{ gap:'1rem', cursor:'pointer'}}
        >
        <LuUsers /> PACIENTE
        </Flex>
      </Flex>
    </>
  )
}

export default SliderMenu