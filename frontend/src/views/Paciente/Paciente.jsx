import { Box, Flex } from '@radix-ui/themes';
import NavbarList from "./NavbarList.jsx";
import DataTable from "react-data-table-component";
import { useAppDispatch, useAppSelector } from '../../hooks/useAppselector.js';
import { useEffect } from 'react';
import { listpacientes } from '../../store/slice/pacienteSlice.js';
import { FaRegEye } from "react-icons/fa";

function Paciente() {


  const dataPacientes = useAppSelector((state) => state.paciente.pacienteData);

  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(listpacientes());
 
  }, []);
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Apellidos y Nombres",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Fecha de nacimiento",
      selector: row => row.birthdate,
      sortable: true,
    },
    {
      name: "Numero de Afiliado",
      selector: row => row.numberAfiled,
    },
    {
      name: "Convenio",
      selector: row => row.obraSocial,
    },
    {
      name: "Expediente",
      cell: row => (
        <div 
          style={{ cursor: 'pointer', fontSize:'1.2rem' }}
          onClick={() => handleExpedienteClick(row.id)} // Maneja el evento click
        >
          <FaRegEye />
        </div>
      ),
    },
  ];



  return (
    <div>
      <Flex align="start" direction="column">
        <Box>
          <NavbarList/>
        </Box>
        <Box>
          <Flex align="start" direction="row">
            <Box width="873px" className="pl-5">
              <Flex align="start" direction="row" gap="1" className="pt-2" width="100%">
                <DataTable
                  columns={columns}
                  data={dataPacientes}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default Paciente;
