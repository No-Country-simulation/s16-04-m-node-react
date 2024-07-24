import { Box, Flex, Text } from '@radix-ui/themes';
import { ArrowLeftIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinThin } from "react-icons/pi";
import profile from "../../assets/profile.png";
/*<Flex style={{flexWrap:'wrap', gap:'1rem'}}>*/

const Historial = () => {
  return(
    <div>
      <Flex direction="row">
        <Box position='relative' width="504px" height="100%" className="pl-5">
          <Flex align="start" direction="column" gap="1" className="pt-2 ">
            <Flex direction="column">
              <Flex asChild gap="2">
                <Text>
                  <ArrowLeftIcon className="mt-1" />
                  Historia Clínica
                </Text>
              </Flex>
              <Box width="444px" height="215px" className="pt-2 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column">
                  <Box width="100%" height="35px" align="center">
                    <Text>
                      Liza Albertina Marquiz
                    </Text>
                  </Box>
                  <Box width="100%" height="167px">
                    <Flex direction="row">
                      <Box width="35%" height="167px">
                        <img src={profile} className="w-36 pt-4 pl-2"/>
                      </Box>
                      <Box width="65%" height="167px">
                        <Flex asChild gap="2" className='pt-9'>
                          <Text>
                            <FiPhoneCall className="mt-1"/>
                            2345677845434
                          </Text>
                        </Flex>
                        <Flex asChild gap="2" className='pt-2'>
                          <Text>
                            <EnvelopeClosedIcon className="mt-1" />
                            albertmar12@gmail.com
                          </Text>
                        </Flex>
                        <Flex asChild gap="2" className='pt-2'>
                          <Text>
                            <PiMapPinThin className="mt-1"/>
                            Aven 93 # 56 -34
                            New York
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex direction="column">
              <Box width="444px" height="48px" className="pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ÚLTIMOS SIGNOS VITALES
              </Box>
              <Box width="444px" height="438px" className="pt-5 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column">
                  <Text>Altura</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box position='relative' width="504px" height="100%" className="pl-5">
          <Flex align="start" direction="column" gap="1" className="pt-2 ">
            <Flex direction="column">
              <Box width="290px" height="48px" className="bg-violet-500 text-white rounded-l rounded-r">
                INICIAR NUEVA CONSULTA
              </Box>
              <Box width="730px" height="48px" className="pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ALERGIAS
              </Box>
              <Box width="730px" height="240px" className="pt-5 border-solid border-2 border-black rounded-l rounded-r"></Box>
            </Flex>
            <Flex direction="column">
              <Box width="730px" height="48px" className="pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ANTECEDENTES PATOLOGICOS
              </Box>
              <Box width="730px" height="332px" className="pt-5 border-solid border-2 border-black rounded-l rounded-r"></Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Historial;