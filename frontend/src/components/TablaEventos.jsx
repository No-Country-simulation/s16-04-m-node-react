import DataTable from 'react-data-table-component';
import { IconButton, Tooltip } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import {  CheckIcon } from "@radix-ui/react-icons";
import { IoEyeOutline } from "react-icons/io5";
import "../css/TablaEventos.css"
import Reprogramar from '../views/Home/Reprogramar';



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

    const columns = [

        {
            name: 'Horas',
            selector: row => row.time,
            sortable: true,
            style: {
                width: '5vw', fontSize: "1.2rem", responsive: true,
            },
        },
        {
            name: 'Avatar',
            selector: row => (
                <img 
                    src={row.pacienteone.user.profilePicture} 
                    alt="Profile" 
                    style={{ width: '4vw' }} 
                />
            ),
        },
        {
            name: 'Paciente',
            selector: row => row.pacienteone.name,
            sortable: true,
            style: {
                width: '10vw', fontSize: "1.2rem", responsive: true,
            },
        },
        {
            name: 'Consulta',
            selector: row => row?.reason,
            style: {
                width: '20vw', fontSize: "1rem", responsive: true,
            },
        },
        {
            name: 'Acciones',
            cell: () =>
                <div style={{display:'flex', alignItems:'center'}}>
                    <Tooltip className='bg-cyan-500' content="Confirmar Paciente">
                        <IconButton className='bg-green-500 btn-grp' radius="full">
                            <CheckIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip className='bg-cyan-500' content="Reprogramar paciente">
                    <Reprogramar className='bg-red-500 btn-grp editCita' radius="full"
                    
                    />
                       
                    </Tooltip>
                    <Tooltip className='bg-cyan-500' content="Historia Clinica">
                        <IconButton className='bg-violet-500 btn-grp' radius="full">
                            <IoEyeOutline />
                        </IconButton>
                    </Tooltip>
                </div>
        },

    ];

    
    console.log(dataCita)

   


    return (
        <div >
           
            
            <DataTable
                columns={columns}
                data={dataCita}
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