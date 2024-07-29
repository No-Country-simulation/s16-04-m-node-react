import { ArrowLeftIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Text, TextField } from "@radix-ui/themes";
import "../../css/paciente.css";

const NavbarList = () => {
  return (
    <div className="headPacientelist">
      <Text>
        <ArrowLeftIcon />
        Listado de pacientes
      </Text>

      <TextField.Root placeholder="Buscar pacientes">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
};

export default NavbarList;
