import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Blockquote, Box, Text, TextField, Flex } from '@radix-ui/themes';
import CalendarioDatePicker from "./CalendarioDatePicker";
import CalendarioBigCalendar from "./CalendarioBigCalendar";
import { BsArrowLeftCircle } from "react-icons/bs";
import Navbar from "../../components/Navbar";


const CalendarioProfesional = () => {
    return (
      <div>
         <Navbar/>
      
         <Flex gap="3">
            
            <Box width="64px" height="64px">
            
            </Box>

            <Box width="404px" height="84px" className="pl-44">
               <Flex align="start" direction="column" gap="1" className="pt-2">
                  <Flex asChild gap="2">
                     <Text >
                        <BsArrowLeftCircle className="mt-1" />  
                        Calendario
                     </Text>
                  </Flex>
               </Flex>
                  
               <div className="pt-4">
                  <CalendarioDatePicker/>
               </div>
            
                  <p className=" text-[20px] pt-5">Especialidades</p>
                  <Box maxWidth="250px" className="pt-4">
                     <Blockquote color="blue" className="bg-[#0EA1E3] bg-opacity-20" >
                        <p className=" text-[20px]  text-[#0369A1]">Medicina general</p>
                     </Blockquote>
                  </Box>
   
                  <Box maxWidth="250px" className="pt-4">    
                     <Blockquote color="orange" className="bg-[#F59E0B] bg-opacity-20 ">
                     <p className=" text-[20px]  text-[#B45309]">Control</p>
                     </Blockquote>
                  </Box>
   
                  <Box maxWidth="250px" className="pt-4">
                     <Blockquote color="purple" className="bg-[#6D28D9] bg-opacity-20 ">
                        <p className=" text-[20px]  text-[#6D28D9]">Neurología</p>
                     </Blockquote>
                  </Box>
   
                  <Box maxWidth="250px" className="pt-4">
                     <Blockquote color="red" className=" bg-[#F43F5E] bg-opacity-20 ">
                        <p className=" text-[20px]  text-[#BE123C]">Pediatría</p>
                     </Blockquote>
                  </Box>

            </Box>

            <Box width="854px" height="524px" className="pl-10 pt-2">
                  <Box width="678px" className="pb-4 pl-56">
                     <TextField.Root placeholder="Buscar pacientes" width="50">
                        <TextField.Slot>
                           <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                     </TextField.Root>
                  </Box>

                  <div style={{height: "95vh", width:"57vw"}}>
                     <CalendarioBigCalendar/>
                  </div>     
            </Box>
            
         </Flex>
      
      </div>
    );
  };
  
  export default CalendarioProfesional;