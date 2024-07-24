import { Box, Flex } from '@radix-ui/themes';
import NavbarList from "./NavbarList.jsx";
import Eye from "../../assets/eye.png";
import DataTable from "react-data-table-component";

function Paciente() {
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Apellidos y Nombres",
      selector: row => row.apellido_nombre,
      sortable: true,
    },
    {
      name: "Fecha de nacimiento",
      selector: row => row.fecha_nacimiento,
      sortable: true,
    },
    {
      name: "Telefono",
      selector: row => row.telefono,
    },
    {
      name: "Convenio",
      selector: row => row.convenio,
    },
    {
      name: "Expediente",
      cell: row => (
        <div 
          style={{ cursor: 'pointer' }}
          onClick={() => handleExpedienteClick(row.id)} // Maneja el evento click
        >
          <img src={Eye} alt="Ver expediente" />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "252",
      apellido_nombre: "Liza Arbertina Marquiz",
      fecha_nacimiento: "10/09/1968",
      telefono: "2346156787898",
      convenio: "",
      expediente: "", // La columna 'expediente' se maneja en la definición de columnas
    },
    {
      id: "251",
      apellido_nombre: "Darlene Robertson",
      fecha_nacimiento: "10/09/1978",
      telefono: "2346156787899",
      convenio: "",
      expediente: "", // La columna 'expediente' se maneja en la definición de columnas
    },
  ];

  // Función para manejar el evento click
  const handleExpedienteClick = (id) => {
    console.log(`Expediente clicked for ID: ${id}`);
    // Puedes agregar lógica adicional aquí, como redirigir o mostrar un modal
  };

  return (
    <Flex direction="column" align="start" gap="4">
      <Box>
        <NavbarList />
      </Box>
      <Box>
        <Flex direction="row" align="start" gap="4" className="pt-2">
          <Box width="100%">
            <DataTable
              columns={columns}
              data={data}
              pagination // Agrega paginación si es necesario
              highlightOnHover // Opcional para destacar filas al pasar el cursor
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Paciente;
