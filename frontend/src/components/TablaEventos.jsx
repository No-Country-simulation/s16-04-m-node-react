import DataTable from 'react-data-table-component';
import { IconButton, Tooltip, Box } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { AvatarIcon, CheckIcon, UpdateIcon } from "@radix-ui/react-icons";
import { IoEyeOutline } from "react-icons/io5";
import "../css/TablaEventos.css"



function TablaEventos() {

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
            selector: row => row.horas,
            sortable: true,
            style: {
                width: '5vw', fontSize: "1.2rem", responsive: true,
            },
        },
        {
            name: 'Avatar',
            selector: row => row.avatar,
            style: {
                width: '5vw', responsive: false,
            },
        },
        {
            name: 'Paciente',
            selector: row => row.paciente,
            sortable: true,
            style: {
                width: '10vw', fontSize: "1.2rem", responsive: true,
            },
        },
        {
            name: 'Consulta',
            selector: row => row.consulta,
            style: {
                width: '20vw', fontSize: "1rem", responsive: true,
            },
        },
        {
            name: 'Acciones',
            cell: () =>
                <div>
                    <Tooltip className='bg-cyan-500' content="Confirmar Paciente">
                        <IconButton className='bg-green-500 btn-grp' radius="full">
                            <CheckIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip className='bg-cyan-500' content="Reprogramar paciente">
                        <IconButton className='bg-red-500 btn-grp' radius="full">
                            <UpdateIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip className='bg-cyan-500' content="Historia Clinica">
                        <IconButton className='bg-violet-500 btn-grp' radius="full">
                            <IoEyeOutline />
                        </IconButton>
                    </Tooltip>
                </div>
        },

    ];

    const data = [
        {
            id: 1,
            horas: '09:00',
            avatar: <Box >
                <AvatarIcon width="35px" height="35px" fillOpacity="0.5" />
            </Box>,
            paciente: "Georgina Solis",
            consulta: 'Chequeo Mensual',
        },

    ]


    return (
        <div width="inherit" className='flex flex-wrap text-wrap'>
            <DataTable
                columns={columns}
                data={data}
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