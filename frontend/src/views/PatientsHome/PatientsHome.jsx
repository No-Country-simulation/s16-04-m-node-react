import '@radix-ui/themes/styles.css';
import { Flex, Button, Text, Container } from '@radix-ui/themes';
import ImagenDocs from "../../assets/vector_docs.png";
import { NavPatientsHome } from "./NavPatientsHome.jsx";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Logo from "../../assets/CHEALTH.png";
import "./css/PatientsHome.css";
import { Link } from 'react-router-dom';

export const PatientsHome = () => {
    return (
        <div>
            <Container maxWidth={'100vw'} height={'100vh'}
             className="bg-cyan-400 flex flex-wrap patientshome-contenedor">
                <NavPatientsHome />
                <img src={Logo} alt="logo_app_CHealth" width={'70px'} className='z-10 absolute top-4 left-10 patientshome-logo' />
                <Flex direction={"row"} width={'100vw'} justify={'center'} align={'center'} className='flex-wrap patientshome'>
                    <Text className='text-white frase font-medium text-wrap text-left float-start'>
                        Encuentra tu especialista y pide cita.
                    </Text>
                    <div>
                        <img src={ImagenDocs} width={'200px'} alt="vectores_Docs" className='float-end top-2 patientshome_img' align="center" />
                    </div>
                </Flex>
                <Flex justify={'center'} align={'center'} gapX={'4'} className='inputs'>
                    <div className="flex border-0 outline-none align-middle text-center">
                        <select className="outline-none rounded-lg py-2 px-10 text-center shadow-md shadow-slate-800"
                            id="select_especialidades">
                            <option value="" disabled selected>Especialidad</option>
                            <option value="consulta">Consulta</option>
                            <option value="medicina_general">Medicina General</option>
                            <option value="neurologia">Neurología</option>
                            <option value="pediatria">Pediatría</option>
                        </select>
                    </div>
                    <Link to='/dashboard/citas'>
                     <Button variant='classic' className='btn text-center bg-cyan-500 align-middle rounded-md shadow-md shadow-slate-800'>
                        <MagnifyingGlassIcon /> Buscar
                    </Button>
                    </Link>
                   
                </Flex>
                <Flex justify={"center"} align={"center"} direction={'row'} gap={'3'} className='cardsPH'>
                    <Flex direction={'column'} align={'center'} justify={'center'} className="grp-cards bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 font-medium">Encuentra tu especialista </h2>
                        <p className="text-slate-800 grpcards-p">Las opiniones reales de miles de pacientes
                            te ayudarán a tomar siempre la mejor decisión</p>
                    </Flex>
                    <Flex direction={'column'} align={'center'} justify={'center'} className="grp-cards flex-wrap bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 font-medium">Pide cita de forma fácil </h2>
                        <p className="text-slate-800 grpcards-p">Elige la hora que prefieras y pide cita sin necesidad de llamar. Es fácil, cómodo y muy rápido.</p>
                    </Flex>
                    <Flex direction={'column'} align={'center'} justify={'center'} className="grp-cards bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 font-medium">Recordatorios por Mail </h2>
                        <p className="text-slate-800 grpcards-p">Te confirmamos la cita al instante y te enviamos un recordatorio a tu mail antes de la cita.</p>
                    </Flex>
                </Flex>
            </Container>
        </div>
    );
};
