import {
  Container, Flex, Card, Text, Strong, Button, Link
} from "@radix-ui/themes";
import Logo from "../../assets/CHEALTH.png";


const CrearCuenta = () => {
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
                  <div>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Email</Strong>
                        </Text>
                        <input
                          type="text"
                          name="email"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          
                        />
                  </div>
                  <div>
                        <Text as="p" size="2" className="mb-1">
                          <Strong>Nombre de usuario</Strong>
                        </Text>
                        <input
                          type="text"
                          name="usuario"
                          placeholder=""
                          className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          
                        />
                  </div>
                
                   <div>
                    <Text as="p" size="2" className="mb-1">
                        <Strong>Contraseña</Strong>
                      </Text>
                      <input
                        type="password"
                        name="contraseña"
                        placeholder=""
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        
                      />
                   </div>
                   <div>
                    <Text as="p" size="2" className="mb-1">
                        <Strong>Confirmar contraseña</Strong>
                      </Text>
                      <input
                        type="password"
                        name="confirmarcontraseña"
                        placeholder=""
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        
                      />
                   </div>
                   <Flex gap="3" align="center">
                    <Button size="3" variant="soft" className="mt-4 bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Link href="/registro" weight="bold">
                          ATRAS
                        </Link>
                      </Button>
                    <Button size="3" variant="soft" className="mt-4 bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Link href="/afiliacion" weight="bold">
                          CONTINUAR
                        </Link>
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

export default CrearCuenta;
