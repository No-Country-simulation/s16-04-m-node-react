import { useState } from "react";
import CrearCuenta from "./CrearCuenta";
import DatosPersonales from "./DatosPersonales";
import Afiliacion from "./Afiliacion";
import Logo from "../../assets/CHEALTH.png";
import "../../css/login.css";
import { Toaster } from "sonner";
import { Container, Flex, AlertDialog, Button, Link } from "@radix-ui/themes";

function Registro() {

  const formArray =[1, 2 ,3];
  const [formNo, setFormNo] = useState(formArray[0])

  const continuar = () => {
     setFormNo(formNo + 1)
  }
  const atras = () => {
    setFormNo(formNo - 1)   
  } 
  
  return (
    <div className="flex h-screen">
      <Toaster richColors position="top-left" />
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
              <div className="card w-[110%] rounded-md shadow-md bg-white p-5">
                  <div className="flex justify-center items-center"> 
                      {
                        formArray.map((v,i) =><><div className={` ${formNo - 1 === i || formNo -1 === i +1 || formNo === formArray.length ? 'bg-sky-700' : 'bg-slate-300'} w-[7%] my-3 text-white rounded-full h-[2rem] flex justify-center items-center`}>
                          {v}
                        </div>
                      {
                        i !== formArray.length - 1 &&  <div className={`w-[30%] h-[0.4rem]  ${formNo === i + 2 || formNo == formArray.length ? 'bg-cyan-600' : 'bg-slate-300'}`}></div>
                      }
                        
                        </>)
                      }
                  </div>
                  {
                    formNo === 1 && <div>
                        <CrearCuenta/>
                        <div className='mt-4 flex justify-center items-center '>
                          <button onClick={continuar} className='px-3 py-2 text-lg rounded-md w-full text-white text-center bg-[#01579B]'>CONTINUAR</button>
                        </div>
                    </div>
                  }
                  {
                    formNo === 2 && <div>
                        <DatosPersonales/>
                        <div className='mt-4 gap-3 flex justify-center items-center'>
                          <button onClick={atras} className='px-3 py-2 text-lg rounded-md w-full text-white text-center bg-[#01579B]'>ATRAS</button>
                          <button onClick={continuar} className='px-3 py-2 text-lg rounded-md w-full text-white text-center bg-[#01579B]'>CONTINUAR</button>
                        </div>
                    </div>
                  }
                  {
                    formNo === 3 && <div>
                        <Afiliacion/>
                        <div className='mt-4 gap-3 flex justify-center items-center'>
                          <button onClick={atras} className='px-3 py-2 text-lg rounded-md w-[50%] text-white text-center bg-[#01579B]'>ATRAS</button>
                            <AlertDialog.Root>
                              <AlertDialog.Trigger>
                                <Button className='px-3 py-2 text-lg rounded-md w-[50%] h-[10%] text-white text-center bg-[#01579B]'>GUARDAR</Button>
                              </AlertDialog.Trigger>
                              <AlertDialog.Content maxWidth="450px">
                                <AlertDialog.Title>Guardar</AlertDialog.Title>
                                <AlertDialog.Description size="2">
                                   Desea guardar los cambios para registrarse?
                                </AlertDialog.Description>

                                <Flex gap="3" mt="4" justify="end">
                                  <AlertDialog.Action>
                                    <Button variant="solid" className="bg-[#01579B]" >
                                     <Link href="/login">Guardar</Link>
                                    </Button>
                                  </AlertDialog.Action>
                                </Flex>
                              </AlertDialog.Content>
                            </AlertDialog.Root>
                        </div>
                    </div>
                  }
              </div>    
          </Flex>
        </Container>
      </div>
    </div>
    
  );
}

export default Registro;