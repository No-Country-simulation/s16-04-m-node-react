import { ArrowLeftIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Text, TextField } from "@radix-ui/themes";
import "../../css/paciente.css";

const NavbarList = () => {
  return (
    <div>
      <Flex gap="3">
        <Box width="404px" height="48px" className="pt-3 pl-5">
          <Flex align="start" direction="row" gap="1">
            <Flex asChild gap="2">
              <Text >
                <ArrowLeftIcon className="mt-1" />  
                Listado de pacientes
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box width="854px" height="48px" className="pl-10 pt-2">
          <Box width="678px" className="pb-4 pl-56">
            <TextField.Root placeholder="Buscar pacientes" width="50">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default NavbarList;
