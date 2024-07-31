import { Box, Flex, Text } from '@radix-ui/themes';
import { ArrowLeftIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinThin } from "react-icons/pi";
import profile from "../../assets/profile.png";
import "../../css/historial.css";
/*<Flex style={{flexWrap:'wrap', gap:'1rem'}}>*/

const Historial = () => {
  return(
    <div className="containerHistorial">
      <div style={{ flexWrap: "wrap", display: "flex" }}>
        <Box position='relative' width="39%" height="100%" className="pt-3 pl-5 pr-2">
          <Flex align="start" direction="column" gap="1">
            <Flex direction="column" width="100%">
              <Flex asChild gap="2">
                <Text>
                  <ArrowLeftIcon className="mt-1" />
                  Historia Clínica
                </Text>
              </Flex>
              <Box width="100%" height="215px" className="mt-9 pt-3 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column">
                  <Box width="100%" height="35px" align="center">
                    <Text className="title">
                      Juan Alberto Marquiz
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
            <Flex direction="column" width="100%">
              <Box width="100%" height="48px" className="mt-2 pt-3 pr-3 pb-3 pl-3 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ÚLTIMOS SIGNOS VITALES
              </Box>
              <Box width="100%" className="mt-3 pt-5 pr-5 pl-5 pb-5 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column">
                  <Box>
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Altura</Text>
                      <Text>1.56</Text>
                      <Text>Mts</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Peso</Text>
                      <Text></Text>
                      <Text>Kg</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Masa corporal</Text>
                      <Text></Text>
                      <Text>imc</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Temperatura</Text>
                      <Text></Text>
                      <Text>C</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Frecuencia respiratoria</Text>
                      <Text></Text>
                      <Text>r/m</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Presión arterial</Text>
                      <Text></Text>
                      <Text>mmHg</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row" align="center" justify="center" className="signo-vital">
                      <Text>Frecuencia cardiaca</Text>
                      <Text></Text>
                      <Text>l/m</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box position='relative' width="61%" height="100%" className="pt-3 pl-2 pr-2">
          <Flex align="end" direction="column" gap="1">
            <Flex direction="column" width="100%">
              <Box width="290px" height="48px" align="center" className="pt-3 pb-3 bg-violet-500 text-white rounded-l rounded-r">
                INICIAR NUEVA CONSULTA
              </Box>
              <Box width="100%" height="48px" className="mt-3 pt-3 pr-3 pb-3 pl-3 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ALERGIAS
              </Box>
              <Box width="100%" className="mt-3 pt-5 pr-5 pl-20 pb-5 border-solid border-2 border-black rounded-l rounded-r">
                <Flex direction="column">
                  <Box>
                    <Text className="title">Alergias a medicamentos:</Text>
                  </Box>
                  <Box className="pt-2">
                    <Text>Aspirina y otros antiinflamatorios no esteroideos (AINEs):</Text>
                  </Box>
                  <Box>
                    <Text>Síntomas: Asma inducida por aspirina, urticaria, angioedema.</Text>
                  </Box>
                  <Box className="pt-2">
                    <Text className="title">Otras alergias:</Text>
                  </Box>
                  <Box className="pt-2">
                    <Text>Medicación actual:</Text>
                  </Box>
                  <Box>
                    <Text>Salbutamol (inhalador) según necesidad</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex direction="column" width="100%">
              <Box width="100%" height="48px" className="mt-2 pt-3 pr-3 pb-3 pl-3 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ANTECEDENTES PATOLOGICOS
              </Box>
              <Box width="100%" className="mt-3 pt-3 pr-5 pb-3 pl-6 border-solid border-2 border-black rounded-l rounded-r">
                <Flex direction="column">
                  <Text>Hipertensión arterial:</Text>
                  <Text>Diagnóstico: 2010</Text>
                  <Text>Tratamiento actual: Losartán 50 mg diarios, Hidroclorotiazida 25 mg diarios</Text>
                  <Text>Control: Presión arterial generalmente bien controlada con medicación</Text>
                  <Text>Diabetes Mellitus Tipo 2:</Text>
                  <Text>Diagnóstico: 2015</Text>
                  <Text>Tratamiento actual: Metformina 850 mg dos veces al día, dieta y ejercicio</Text>
                  <Text>Control: Hemoglobina A1c última: 7.2%</Text>
                  <Text>Infarto Agudo de Miocardio (IAM):</Text>
                  <Text>Evento: Junio 2018</Text>
                  <Text>Tratamiento recibido: Angioplastia coronaria con colocación de stent</Text>
                  <Text>Medicación actual post-infarto: Aspirina 81 mg diarios, Atorvastatina 40 mg diarios, Bisoprolol 5 mg diarios</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Historial;