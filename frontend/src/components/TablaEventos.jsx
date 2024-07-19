import DataTable from 'react-data-table-component';
import { Button, Box } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { AvatarIcon } from "@radix-ui/react-icons";
import EyeIcon from "../assets/eye.png";


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
        <>
            <Button className="tarjeta bg-emerald-500 shadow-md shadow-slate-700 rounded-md hover:bg-emerald-400">Confirmar</Button>
            <Button className="tarjeta bg-red-500 shadow-md shadow-slate-700 rounded-md hover:bg-red-400">Reprogramar</Button>
            <Button className="tarjeta bg-violet-500 shadow-md shadow-slate-700 rounded-md hover:bg-violet-400">
                <img
                    src={EyeIcon}
                    alt="Ver"
                >
                </img>
            </Button>
        </>
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

function TablaEventos() {
    return (

        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            responsive
        />

    );
}

export default TablaEventos;