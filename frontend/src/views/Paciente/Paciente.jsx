import { Flex } from "@radix-ui/themes";
import NavbarList from "./NavbarList.jsx";
import DataTable from "react-data-table-component";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppselector.js";
import { useEffect } from "react";
import { listpacientes } from "../../store/slice/pacienteSlice.js";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../../css/paciente.css";

function Paciente() {
  const dataPacientes = useAppSelector((state) => state.paciente.pacienteData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listpacientes());
  }, []);
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Apellidos y Nombres",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Fecha de nacimiento",
      selector: (row) => row.birthdate,
      sortable: true,
    },
    {
      name: "Numero de Afiliado",
      selector: (row) => row.numberAfiled,
    },
    {
      name: "Convenio",
      selector: (row) => row.obraSocial,
    },
    {
      name: "Expediente",
      cell: (row) => (
        <Link to="historial">
          <div
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
          >
            <FaRegEye />
          </div>
        </Link>
      ),
    },
  ];

  return (
    <div className="containerPaciente">
      <Flex direction="column" gap="1rem" width="100%">
        <NavbarList/>
        
        <DataTable
          columns={columns}
          data={dataPacientes}
          className="tablePaciente"
        />
      </Flex>
    </div>
  );
}

export default Paciente;
