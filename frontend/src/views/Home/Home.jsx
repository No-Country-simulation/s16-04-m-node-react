import { Container, Flex, Heading, Text } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import "../../css/Home.css"
import FechaActual from "../../components/FechaActual";
import TablaEventos from "../../components/TablaEventos";


const Home = () => {
  return (
    <Flex maxWidth={'80vw'} direction="column" className="home">      
        <Flex direction="row" align="center" justify="center" className="menuMediaQ pt-5">
          <Flex className="fecha text-2xl px-10">
            <FechaActual className="fecha" />
          </Flex>
          <div>
            <Heading className="flex fecha text-2xl justify-center px-10">Citas del Dia</Heading>
          </div>
          <div className="searchinput flex gap-1 border-2 border-solid border-slate-400 outline-none ring-1 rounded-md align-middle text-center p-1" >
            <MagnifyingGlassIcon className="ms-1 mt-1" />
            <input className="outline-none tarjeta px-10 text-center" type="search" name="search" id="search" placeholder=" Buscar Pacientes" />
          </div>
        </Flex>      
      <Container className=" flex flex-wrap justify-center">
        <Flex  direction="row" justify="center" className="squaresMediaQ flex-wrap" gapX="4" pt={'2rem'}>
          <Flex direction={'column'} width="19vw" p={'1rem'} className="squaresMediaQ2 pt-5 border-solid border-4 border-indigo-700 rounded-xl" >
            <Heading className="text-center text-sky-700 text-4xl fecha">
              10 
            </Heading>
            <Text as="p" className="text-center tarjeta text-sky-700 text-2xl px-2">
              Pacientes Confirmados
            </Text>
          </Flex>
          <Flex direction={'column'} width="19vw" p={'1rem'} className="squaresMediaQ2 pt-5 border-solid border-4 border-emerald-400 rounded-xl " >
            <Heading className="text-center text-emerald-400 text-4xl fecha">
              25
            </Heading>
            <Text as="p" className="box text-center tarjeta text-emerald-400 text-2xl px-2">
              Pacientes Atendidos
            </Text>
          </Flex>
          <Flex direction={'column'} width="19vw" p={'1rem'} className="squaresMediaQ2 pt-5 border-solid border-4 border-red-400 rounded-xl " >
            <Heading className="text-center text-red-400 text-4xl fecha">
              15
            </Heading>
            <Text as="p" className="text-center tarjeta text-red-400 text-2xl px-2">
              Pacientes Faltantes
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Container width="auto" className="tablaMediaQ" >
        <Flex direction="row" justify={'center'} className="tablaEventos">
           <TablaEventos width="100%"/> 
        </Flex>
      </Container>
    </Flex>
  )
}
export default Home