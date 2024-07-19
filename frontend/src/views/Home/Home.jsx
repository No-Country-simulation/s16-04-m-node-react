import { Container, Flex, Box, Heading, Text } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import "../../css/Home.css"
import FechaActual from "../../components/FechaActual";
import TablaEventos from "../../components/TablaEventos";


const Home = () => {
  return (
    <Flex direction="column">
      <Container>
        <Flex direction="row" align="center" justify="center" className="gap-10 mt-5">
          <div className="fecha px-10">
            <FechaActual className="fecha" />
          </div>
          <div>
            <Heading className="fecha px-10">Citas del Dia</Heading>
          </div>
          <div className="flex gap-1 border-2 border-solid border-slate-400 outline-none ring-1 rounded-md align-middle text-center p-1" >
            <MagnifyingGlassIcon className="ms-1 mt-1" />
            <input className="outline-none tarjeta px-10 text-center" type="search" name="search" id="search" placeholder=" Buscar Pacientes" />
          </div>
        </Flex>
      </Container>
      <Container>
        <Flex direction="row" justify="center" className="relative top-10" gapX="9">
          <Box width="225px" height="150px" className="pt-5 border-solid border-4 border-indigo-700 rounded-xl" >
            <Heading className="text-center text-sky-700 text-5xl fecha">
              10
            </Heading>
            <Text as="p" className="text-center tarjeta text-sky-700 text-2xl">
              Pacientes Confirmados
            </Text>
          </Box>
          <Box width="225px" height="150px" className="pt-5 border-solid border-4 border-emerald-400 rounded-xl " >
            <Heading className="text-center text-emerald-400 text-5xl fecha">
              25
            </Heading>
            <Text as="p" className="box text-center tarjeta text-emerald-400 text-2xl px-2">
              Pacientes Atendidos
            </Text>
          </Box>
          <Box width="225px" height="150px" className="pt-5 border-solid border-4 border-red-400 rounded-xl " >
            <Heading className="text-center text-red-400 text-5xl fecha">
              15
            </Heading>
            <Text as="p" className="text-center tarjeta text-red-400 text-2xl px-2">
              Pacientes Faltantes
            </Text>
          </Box>
        </Flex>
      </Container>
      <Container width="100vw" className="flex pt-20" >
        <Flex direction="row" className="tablaEventos">
           <TablaEventos /> 
        </Flex>
      </Container>
    </Flex>
  )
}
export default Home