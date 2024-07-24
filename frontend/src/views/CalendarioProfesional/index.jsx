import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Blockquote, Box, Text, TextField, Flex } from "@radix-ui/themes";
import CalendarioDatePicker from "./CalendarioDatePicker";
import CalendarioBigCalendar from "./CalendarioBigCalendar";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useEffect } from "react";
import { citasList } from "../../api/citas";

const CalendarioProfesional = () => {
  useEffect( () => {

   const citas = async()=>{
      try {
      const reponse = await citasList();

      console.log(reponse.data);
    } catch (error) {
      console.log(error);
    }
   }
   citas()
   
  }, []);

  return (
    <div>
      <Flex style={{ flexWrap: "wrap", gap: "1rem" }}>
        <Box position="relative" width="304px" height="100%" className="pl-5">
          <Flex align="start" direction="column" gap="1" className="pt-2 ">
            <Flex asChild gap="2">
              <Text>
                <BsArrowLeftCircle className="mt-1" />
                Calendario
              </Text>
            </Flex>
          </Flex>

          <CalendarioDatePicker />

          <div>
            <p className=" text-[20px] pt-5">Especialidades</p>
            <Box maxWidth="250px" className="pt-4">
              <Blockquote color="blue" className="bg-[#0EA1E3] bg-opacity-20">
                <p className=" text-[20px]  text-[#0369A1]">Medicina general</p>
              </Blockquote>
            </Box>

            <Box maxWidth="250px" className="pt-4">
              <Blockquote
                color="orange"
                className="bg-[#F59E0B] bg-opacity-20 "
              >
                <p className=" text-[20px]  text-[#B45309]">Control</p>
              </Blockquote>
            </Box>

            <Box maxWidth="250px" className="pt-4">
              <Blockquote
                color="purple"
                className="bg-[#6D28D9] bg-opacity-20 "
              >
                <p className=" text-[20px]  text-[#6D28D9]">Neurología</p>
              </Blockquote>
            </Box>

            <Box maxWidth="250px" className="pt-4">
              <Blockquote color="red" className=" bg-[#F43F5E] bg-opacity-20 ">
                <p className=" text-[20px]  text-[#BE123C]">Pediatría</p>
              </Blockquote>
            </Box>
          </div>
        </Box>

        <Box position="relative" width="55vw" height="100%" className="pt-2">
          <Box width="90%" className="pb-4 ">
            <TextField.Root placeholder="Buscar pacientes" width="50">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          </Box>

          <div style={{ height: "100%", width: "100%" }}>
            <CalendarioBigCalendar />
          </div>
        </Box>
      </Flex>
    </div>
  );
};

export default CalendarioProfesional;
