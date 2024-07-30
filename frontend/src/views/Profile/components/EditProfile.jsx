import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";

const EditProfile = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Editar Perfil</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Editar Datos de Perfil</Dialog.Title>
          <Dialog.Description size="2" mb="4">
          Actualice su información personal y los datos de su cuenta aquí.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nombre:
              </Text>
              <TextField.Root
              defaultValue='Juan'
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Apellido:
              </Text>
              <TextField.Root
                defaultValue="Perez"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email secundario:
              </Text>
              <TextField.Root
                defaultValue="juan.perez@example.com"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Teléfono:
              </Text>
              <TextField.Root
                defaultValue="+34 612 345 678"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Dirección:
              </Text>
              <TextField.Root
                defaultValue="Calle Mayor 123, 28013 Madrid, España"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email Principal:
              </Text>
              <TextField.Root
                defaultValue="juan.perez@example.com"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Apellido:
              </Text>
              <TextField.Root
                defaultValue="Perez"
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
    </>
  );
};

export default EditProfile;
