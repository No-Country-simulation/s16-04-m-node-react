import {
  Container, Flex, Card, Text, Strong, Box, Button, Link, Select
} from "@radix-ui/themes";
import Logo from "../../assets/CHEALTH.png";


const Afiliacion = () => {
  return (
    <div className="flex h-screen">
     
      <div className="w-1/5 bg-[#ade8f4] flex items-center justify-center sidebar">
        <img
          src={Logo}
          className="max-w-full max-h-full"
          style={{ maxWidth: "12rem", maxHeight: "12rem" }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Container size="2" className="login-container">
          <Flex direction="column" gap="2" className="max-w-md mx-auto">
            <Card className="py-8 px-10 shadow-lg rounded-lg">
              <form>
                <Flex direction="column" gap="6" className="py-8 px-10">
                    <Flex gap="3">
                      <Box >
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Nombres de la Obra Social</Strong>
                        </Text>
                        <Select.Root defaultValue="ISJ" >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Group>
                                <Select.Label>Seleccione..</Select.Label>
                                <Select.Item value="ASD">ASD</Select.Item>
                                <Select.Item value="BBB">BBB</Select.Item>
                              </Select.Group>   
                            </Select.Content>
                         </Select.Root>
                      </Box>
                      <Box>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>N° de Afiliado</Strong>
                        </Text>
                        <input
                          type="number"
                          name="numAfiliado"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"                          
                        />
                      </Box>
                      
                    </Flex>

                   <div>
                    <Text as="p" size="2" className="mb-1">
                        <Strong>Plan de cobertura</Strong>
                      </Text>
                      <input
                        type="text"
                        name="plan"
                        placeholder=""
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        
                      />
                   </div>

                   <Flex gap="3">
                      <Box>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Fecha de Afiliación</Strong>
                        </Text>
                        <input
                          type="date"
                          name="fechaAfiliacion"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"                          
                        />
                      </Box>
                      <Box >
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Tipo de Afiliación</Strong>
                        </Text>
                        <Select.Root defaultValue="ISJ" >
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Group>
                                <Select.Label>Seleccione..</Select.Label>
                                <Select.Item value="ASD">ASD</Select.Item>
                                <Select.Item value="BBB">BBB</Select.Item>
                              </Select.Group>   
                            </Select.Content>
                         </Select.Root>
                       
                      </Box>
                      
                   </Flex>

                   <div>
                    <Text as="p" size="2" className="mb-1">
                        <Strong>Correo</Strong>
                      </Text>
                      <input
                        type="text"
                        name="correo"
                        placeholder=""
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        
                      />
                   </div>
                   <Flex gap="3" align="center">
                    <Button size="3" variant="soft" className="mt-4 bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Link href="/crearCuenta" weight="bold">
                          ATRAS
                        </Link>
                      </Button>
                    <Button size="3" variant="soft" className="mt-4 bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar 
                    </Button>
                  </Flex>
                   

                   
                </Flex>
              </form>
            </Card>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Afiliacion;
