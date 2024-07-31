import { Heading, Select, Separator } from "@radix-ui/themes";
import "./css/usercitas.css";
import ItemCitas from "./components/ItemCitas";

const UserCitas = () => {
  return (
    <>
      <div className="containeruserCitas">
        <Heading>Citas disponibles</Heading>
        <section className="filteruserCitas">
          <span> Seleccione la especialidad:</span>
          <Select.Root defaultValue="apple">
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Especialidades</Select.Label>
                <Select.Item value="consulta">Consulta</Select.Item>
                <Select.Item value="mediciona">Mediciona General</Select.Item>
                <Select.Item value="neurologia">Neurologia</Select.Item>
                <Select.Item value="pediatria">Pediatría</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </section>
        <Separator my="3" size="4" />
        <section className="listtuscitas">
        <ItemCitas/>
        </section>
      </div>
    </>
  );
};

export default UserCitas;
