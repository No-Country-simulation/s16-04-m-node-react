import { ArrowLeftIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import "../../css/paciente.css";

const NavbarList = () => {
  return (
    <div>
      <Flex>
    
         
            <Flex asChild gap="2">
              <Text >
                <ArrowLeftIcon className="mt-1" />  
                Listado de pacientes
              </Text>
            </Flex>
         
       
  
            <TextField.Root placeholder="Buscar pacientes" width="50">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
     
      </Flex>
    </div>
  );
};

export default NavbarList;
