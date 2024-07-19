import {
    Container,
    Card,
    Flex,
    Text,
    Button,
    Strong,
    Separator,
  } from "@radix-ui/themes";
  import Logo from "../../assets/CHEALTH.png";
  import "../../css/login.css";
  import { FcGoogle } from "react-icons/fc";
import { authenticateUser } from "../../utils/authUtils";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
  
  const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data)
      authenticateUser(data);
    };

    return (
      
      <div className="flex h-screen">
        <Toaster richColors position="top-left"/>
        <div className="w-1/5 bg-[#ade8f4] flex items-center justify-center sidebar">
          <img 
            src={Logo} 
            className="max-w-full max-h-full" 
            style={{ maxWidth: '12rem', maxHeight: '12rem' }} 
          />
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <Container size="2" className="login-container">
            <Flex direction="column" gap="2" className="max-w-md mx-auto">
              <Card className="py-8 px-10 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex direction="column" gap="6" className="py-8 px-10">
                    <div>
                      <Text as="p" size="2" className="mb-1">
                        <Strong>Email:</Strong>
                      </Text>
                      <input
                        type="text"
                        name="email"
                        placeholder="Ingrese su email"
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("email")}
                      />
                    </div>
                    <div>
                      <Text as="p" size="2" className="mb-1">
                        <Strong>Contraseña:</Strong>
                      </Text>
                      <input
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        className="w-full px-4 py-2 border border-[#57ced4] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        {...register("password")}
                      />
                    </div>
                    <Button className="mt-4 w-full bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Ingresar
                    </Button>
                    <div className="flex items-center my-4">
                      <Separator orientation="horizontal" size="4" />
                      <span className="mx-2 text-gray-500">O</span>
                      <Separator orientation="horizontal" size="4" />
                    </div>
                    <button className="btn-google">
                      <FcGoogle /> Ingresar con Google
                    </button>
                  </Flex>
                </form>
              </Card>
            </Flex>
          </Container>
        </div>
      </div>
    );
  };
  
  export default Login;
  