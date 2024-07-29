import {
  Container, Flex, Card, Text, Strong, Box, Button, Checkbox, Link
} from "@radix-ui/themes";
import Logo from "../../assets/CHEALTH.png";
import BarraProgress from "../BarraProgress";


const DatosPersonales = () => {
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
          <BarraProgress />
            <Card className="py-8 px-10 shadow-lg rounded-lg">
            
              <form>
                <Flex direction="column" gap="6" className="py-8 px-10">
                    <Flex gap="3">
                      <Box >
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Nombres</Strong>
                        </Text>
                        <input
                          type="text"
                          name="nombres"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          
                        />
                      </Box>
                      <Box>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Apellidos</Strong>
                        </Text>
                        <input
                          type="text"
                          name="nombre"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"                          
                        />
                      </Box>
                      
                    </Flex>

                   <div>
                    <Text as="p" size="2" className="mb-1">
                        <Strong>Correo</Strong>
                      </Text>
                      <input
                        type="text"
                        name="correo"
                        placeholder="Ingrese su correo"
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        
                      />
                   </div>

                   <Flex gap="3">
                      <Box >
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Teléfono</Strong>
                        </Text>
                        <input
                          type="number"
                          name="telefono"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          
                        />
                      </Box>
                      <Box>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Fecha de Nacimiento</Strong>
                        </Text>
                        <input
                          type="date"
                          name="fecha"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"                          
                        />
                      </Box>
                      
                   </Flex>

                   <Text as="label" size="2">
                    <Flex gap="2">
                      <Checkbox defaultChecked />
                         Acepto los Términos del servicio y la Política de privacidad 
                         y ley de datos personales
                    </Flex>
                   </Text>

                   <div>
                    <Button className="mt-4 bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <Link href="/crearCuenta" weight="bold">
                      CONTINUAR
                    </Link>
                    </Button>
                   </div>
                </Flex>
              </form>
            </Card>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default DatosPersonales;
