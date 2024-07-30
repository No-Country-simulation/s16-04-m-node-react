import DataTable from 'react-data-table-component';
import { Badge, Flex, IconButton, Tooltip } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import {  CheckIcon } from "@radix-ui/react-icons";
import { IoEyeOutline } from "react-icons/io5";
import "../css/TablaEventos.css"
import Reprogramar from '../views/Home/Reprogramar';
import ConfirmPaciente from '../views/Home/ConfirmPaciente';



function TablaEventos({dataCita}) {

    const customStyles = {
        table: {
            className: "tblmediaQ",
            style: {
                width: '100%',
                justifyContent: "around",
                responsive: true,
            }
        },
        headCells: {
            style: {
                fontSize: "1rem",
                justifyContent: "center",
            },
        },
        rows: {
            className: "rowsMediaQ",
            style: {
                height: '55px',
                maxWidth: '98vw',
                justify: 'center',
                align: "center",
                responsive: true,
            },
        },
        cells: {
            className: "cellsMediaQ",
            style: {
                textAlign: "center",
                justifyContent:'center',
                responsive: false,
            },
        },

    }

    const getStatusBadge = (estado) => {
        let color;
        switch (estado) {
          case "confirmado":
            color = "blue";
            break;
          case "en espera":
            color = "yellow";
            break;
          case "cancelado":
            color = "red";
            break;
          default:
            color = "gray";
        }
        return (
          <Flex gap="2">
            <Badge color={color}>{estado}</Badge>
          </Flex>
        );
      };
      
      const columns = [
        {
          name: 'Horas',
          selector: row => row.hora,
          sortable: true,
          style: {
            width: '5vw',
            fontSize: "1.2rem",
            responsive: true,
          },
        },
        {
          name: 'Estado',
          selector: row => getStatusBadge(row.estado)
        },
        {
          name: 'Paciente',
          selector: row => row.paciente,
          sortable: true,
          style: {
            width: '10vw',
            fontSize: "1.2rem",
            responsive: true,
          },
        },
        {
          name: 'Consulta',
          selector: row => row.consulta,
          style: {
            width: '20vw',
            fontSize: '1rem',
            responsive: true,
          },
        },
        {
          name: 'Acciones',
          cell: () =>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip className='bg-cyan-500' content="Confirmar Paciente">
                <ConfirmPaciente className='bg-green-500 btn-grp' radius="full"/>
                  
               
              </Tooltip>
              <Tooltip className='bg-cyan-500' content="Reprogramar paciente">
                <Reprogramar className='bg-red-500 btn-grp editCita' radius="full" />
              </Tooltip>
              <Tooltip className='bg-cyan-500' content="Historia Clinica">
                <IconButton className='bg-violet-500 btn-grp' radius="full">
                  <IoEyeOutline />
                </IconButton>
              </Tooltip>
            </div>
        },
      ];

    
    const citas = [
        {
          hora: "09:00",
          estado: "confirmado",
          paciente: "Juan Pérez",
          consulta: "medicina general"
        },
        {
          hora: "10:00",
          estado: "en espera",
          paciente: "María Gómez",
          consulta: "control"
        },
        {
          hora: "11:00",
          estado: "cancelado",
          paciente: "Carlos Ramírez",
          consulta: "neurologia"
        },
        {
          hora: "12:00",
          estado: "confirmado",
          paciente: "Ana Martínez",
          consulta: "pedriatria"
        },
        {
          hora: "13:00",
          estado: "en espera",
          paciente: "Luis Fernández",
          consulta: "medicina general"
        },
        {
          hora: "14:00",
          estado: "confirmado",
          paciente: "Sofía Torres",
          consulta: "control"
        },
        {
          hora: "15:00",
          estado: "cancelado",
          paciente: "Miguel Hernández",
          consulta: "neurologia"
        }
      ];

     
    


    return (
        <div >
           
            
            <DataTable
                columns={columns}
                data={citas}
                customStyles={customStyles}
                responsive
                pagination
                paginationPerPage={8}
                onSelectedRowsChange={(data) => console.log(data)}
            />
        </div>
    );
}

export default TablaEventos;