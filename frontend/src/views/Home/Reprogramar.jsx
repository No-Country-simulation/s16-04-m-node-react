import { Button, Dialog, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import '../../css/TablaEventos.css'
import { UpdateIcon } from "@radix-ui/react-icons"

const Reprogramar = () => {
  return (
    <Dialog.Root>
  <Dialog.Trigger className="editCita">
    <Button>
    <IconButton className='bg-red-500 btn-grp' radius="full">
                            <UpdateIcon />
                        </IconButton>
    </Button>
  </Dialog.Trigger>

  <Dialog.Content maxWidth="450px" radius="full" >
    <Dialog.Title>Reprogramar Cita</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Seleccione la fecha y hora nueva
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Fecha
        </Text>
        <TextField.Root type="date"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Hora
        </Text>
        <TextField.Root type="time"
        />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancelar
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Guardar</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  )
}

export default Reprogramar