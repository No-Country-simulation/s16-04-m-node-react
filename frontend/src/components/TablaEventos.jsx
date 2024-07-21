import DataTable from 'react-data-table-component';
import { IconButton, Tooltip, Box } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { AvatarIcon, CheckIcon, UpdateIcon } from "@radix-ui/react-icons";
import { IoEyeOutline } from "react-icons/io5";




function TablaEventos() {

    const customStyles = {
        table: {
            style: {
                width: '90%',
            }
        },
        headCells: {
            style: {
                fontSize: "1rem",
            },
        },
        rows: {
            style: {
                minHeight: '75px',
                maxWidth: '77vw',
                grow: 0,
                justify: "center",
                align: "center",
            },
        },
        cells: {
            style: {
                paddingLeft: '0',
                paddingRight: '0',
            },
        },

    }

    const columns = [

        {
            name: 'Horas',
            selector: row => row.horas,
            sortable: true,
            style: {
                width: '5vw', fontSize: "1.2rem",
            },
        },
        {
            name: 'Avatar',
            selector: row => row.avatar,
            style: {
                width: '5vw',
            },
        },
        {
            name: 'Paciente',
            selector: row => row.paciente,
            sortable: true,
            style: {
                width: '10vw', fontSize: "1.2rem",
            },
        },
        {
            name: 'Consulta',
            selector: row => row.consulta,
            style: {
                width: '20vw', fontSize: "1rem",
            },
        },
        {
            name: 'Acciones',
            button: true,
            cell: () =>
                <div>
                    <Tooltip content="Confirmar Paciente">
                        <IconButton radius="full">
                            <CheckIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip content="Add to library">
                        <IconButton radius="full">
                            <UpdateIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip content="Add to library">
                        <IconButton radius="full">
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

        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            responsive
            pagination
            paginationPerPage={8}
            onSelectedRowsChange={(data) => console.log(data)}
        />

    );
}

export default TablaEventos;