import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import { FiCheckCircle } from "react-icons/fi";

const ConfirmPaciente = () => {
  return (
    <>
        <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button className='bg-green-500 btn-grp' radius="full"><FiCheckCircle /></Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Confirmar Cita</AlertDialog.Title>
    <AlertDialog.Description size="2">
    ¿Está seguro de que desea confirmar esta cita? Una vez confirmada, el paciente será notificado y la cita será marcada como confirmada en el sistema.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="red">
          Cancelar
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="green">
          Confirmar
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
    </>
  )
}

export default ConfirmPaciente