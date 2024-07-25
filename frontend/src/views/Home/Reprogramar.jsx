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
    <Dialog.Title>Editar</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Make changes to your profile.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Name
        </Text>
        <TextField.Root
          defaultValue="Freja Johnsen"
          placeholder="Enter your full name"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Email
        </Text>
        <TextField.Root
          defaultValue="freja@example.com"
          placeholder="Enter your email"
        />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Save</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  )
}

export default Reprogramar