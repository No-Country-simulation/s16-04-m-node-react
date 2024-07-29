import { Box, Flex, Text } from '@radix-ui/themes';
import { ArrowLeftIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinThin } from "react-icons/pi";
import profile from "../../assets/profile.png";
/*<Flex style={{flexWrap:'wrap', gap:'1rem'}}>*/

const Historial = () => {
  return(
    <div>
      <Flex direction="row" style={{ flexWrap: "wrap" }}>
        <Box position='relative' width="504px" height="100%" className="pt-3 pl-5">
          <Flex align="start" direction="column" gap="1">
            <Flex direction="column">
              <Flex asChild gap="2">
                <Text>
                  <ArrowLeftIcon className="mt-1" />
                  Historia Clínica
                </Text>
              </Flex>
              <Box width="444px" height="215px" className="mt-9 pt-3 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column">
                  <Box width="100%" height="35px" align="center">
                    <Text>
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
            <Flex direction="column">
              <Box width="444px" height="48px" className="mt-2 pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ÚLTIMOS SIGNOS VITALES
              </Box>
              <Box width="444px" height="438px" className="mt-3 border-solid border-2 border-gray rounded-l rounded-r">
                <Flex direction="column" className="pl-5 pt-5">
                  <Box>
                    <Flex direction="row">
                      <Text className="pr-20">Altura</Text>
                      <Text className="pl-20 pr-20">1.56</Text>
                      <Text className="pl-10">Mts</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-20">Peso</Text>
                      <Text className="pl-20 pr-20"></Text>
                      <Text className="pl-10">Kg</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-10">Masa corporal</Text>
                      <Text className="pl-20 pr-20"></Text>
                      <Text className="pl-10">imc</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-20">Temperatura</Text>
                      <Text className="pl-20 pr-20"></Text>
                      <Text className="pl-10">C</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-8">Frecuencia respiratoria</Text>
                      <Text className="pl-2 pr-10"></Text>
                      <Text className="pl-20">r/m</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-20">Presión arterial</Text>
                      <Text className="pl-4 pr-10"></Text>
                      <Text className="pl-20">mmHg</Text>
                    </Flex>
                  </Box>
                  <Box className="pt-2">
                    <Flex direction="row">
                      <Text className="pr-10">Frecuencia cardiaca</Text>
                      <Text className="pl-6 pr-10"></Text>
                      <Text className="pl-20">l/m</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box position='relative' width="504px" height="100%" className="pt-3 pl-5">
          <Flex align="start" direction="column" gap="1">
            <Flex direction="column">
              <Box width="290px" height="48px" className="bg-violet-500 text-white rounded-l rounded-r">
                INICIAR NUEVA CONSULTA
              </Box>
              <Box width="730px" height="48px" className="mt-3 pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ALERGIAS
              </Box>
              <Box width="730px" height="240px" className="mt-3 border-solid border-2 border-black rounded-l rounded-r">
                <Flex direction="column" className="pl-20 pt-5">
                  <Box>
                    <Text>Alergias a medicamentos:</Text>
                  </Box>
                  <Box className="pt-2">
                    <Text>Aspirina y otros antiinflamatorios no esteroideos (AINEs):</Text>
                  </Box>
                  <Box>
                    <Text>Síntomas: Asma inducida por aspirina, urticaria, angioedema.</Text>
                  </Box>
                  <Box className="pt-2">
                    <Text>Otras alergias:</Text>
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
            <Flex direction="column">
              <Box width="730px" height="48px" className="mt-2 pt-5 border-solid border-2 border-black rounded-l rounded-r bg-blue-200">
                ANTECEDENTES PATOLOGICOS
              </Box>
              <Box width="730px" height="332px" className="mt-3 border-solid border-2 border-black rounded-l rounded-r">
                <Flex direction="column" className="pl-6 pt-3">
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
      </Flex>
    </div>
  );
};

export default Historial;