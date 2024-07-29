import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "../../css/Home.css";
import FechaActual from "../../components/FechaActual";
import TablaEventos from "../../components/TablaEventos";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppselector";
import { useEffect, useState } from "react";
import { listCitas } from "../../store/slice/citasSlice";
import Loader from "../../components/Loader"; // Importa tu componente Loader

const Home = () => {
  const dataCitas = useAppSelector((state) => state.citas.citaData);
  const [confirmNumber, setConfirmNumber] = useState(0);
  const [atendidosNumber, setatendidosNumber] = useState(0);
  const [faltantesNumber, setfaltantesNumber] = useState(0);
  const [loading, setLoading] = useState(true); // Estado para el loader

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(listCitas());
      countConfirm();
      setTimeout(() => {
        setLoading(false); 
      }, 1000); 
    };
    fetchData();
  }, [dispatch]);

  const countConfirm = () => {
    let count = 0;
    dataCitas.forEach((item) => {
      if (item.status === "accepted") {
        count++;
      }
    });
    setConfirmNumber(count);
  };

  if (loading) {
    return <Loader />; }

  return (
    <Flex maxWidth={"100vw"} direction="column" className="home">
      <Flex
        direction="row"
        align="center"
        justify="center"
        className="menuMediaQ pt-5"
      >
        <Flex className="fecha text-2xl px-10">
          <FechaActual className="fecha" />
        </Flex>
        <div>
          <Heading className="flex fecha text-2xl justify-center px-10">
            Citas del Dia
          </Heading>
        </div>
        <div className="searchinput flex gap-1 border-2 border-solid border-slate-400 outline-none ring-1 rounded-md align-middle text-center p-1">
          <MagnifyingGlassIcon className="ms-1 mt-1" />
          <input
            className="outline-none tarjeta px-10 text-center"
            type="search"
            name="search"
            id="search"
            placeholder=" Buscar Pacientes"
          />
        </div>
      </Flex>
      <Container >
        <Flex
          direction="row"
          justify="center"
          className="squaresMediaQ flex-wrap"
          gap={'1rem'}        
          pt={"2rem"}
        >
          <Flex
            direction={"column"}
            width="19vw"
            p={"1rem"}
            className="squaresMediaQ2 pt-5 border-solid border-4 border-indigo-700 rounded-xl"
          >
            <Heading className="text-center text-sky-700 text-4xl fecha">
              {confirmNumber}
            </Heading>
            <Text
              as="p"
              className="text-center tarjeta text-sky-700 text-2xl px-2"
            >
              Citas Confirmados
            </Text>
          </Flex>
         
          <Flex
            direction={"column"}
            width="19vw"
            p={"1rem"}
            className="squaresMediaQ2 pt-5 border-solid border-4 border-red-400 rounded-xl "
          >
            <Heading className="text-center text-red-400 text-4xl fecha">
              {faltantesNumber}
            </Heading>
            <Text
              as="p"
              className="text-center tarjeta text-red-400 text-2xl px-2"
            >
              Citas Canceladas
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Container width="auto" className="tablaMediaQ">
        <Flex direction="row" justify={"center"} >
          <TablaEventos dataCita={dataCitas} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Home;
