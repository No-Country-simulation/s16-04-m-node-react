import '@radix-ui/themes/styles.css';
import { Flex, Button, Text, Container } from '@radix-ui/themes';
import ImagenDocs from "../../assets/vector_docs.png";
import { NavPatientsHome } from "./NavPatientsHome.jsx";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Logo from "../../assets/CHEALTH.png";
import "./css/PatientsHome.css"

export const PatientsHome = () => {
    return (
        <div>
            <Container maxWidth={'100vw'} height={'100vh'} overflow={'hidden'} className="bg-cyan-400 flex-wrap patientshome-contenedor">
                <NavPatientsHome />
                <img src={Logo} alt="logo_app_CHealth" width={'70px'} className='z-10 relative top-2 left-10 patientshome-logo' />
                <Flex direction={"row"} width={'100vw'} gapX={'9'} justify={'center'} align={'center'} pt={'3'} className='relative flex-wrap patientshome'>
                    <Text className='text-white frase font-medium px-3 text-wrap text-left float-start' width="50%">
                        Encuentra tu especialista y pide cita.
                    </Text>
                    <div>
                        <img src={ImagenDocs} width={'200px'} alt="vectores_Docs" className='float-end patientshome_img' align="center" />
                    </div>
                </Flex>
                <Flex justify={'center'} align={'center'} gapX={'4'} className='inputs'>
                    <div className="flex border-0
                     outline-none align-middle text-center p-1" >
                        <input className="outline-none rounded-lg py-2 px-10 pt text-center shadow-md shadow-slate-800"
                            type="select" name="select" id="select_especialidades" placeholder=" Especialidad" />
                    </div>
                    <div className="flex border-0
                     outline-none align-middle text-center p-1" >
                        <input className="outline-none rounded-lg py-2 px-10 text-center shadow-md shadow-slate-800"
                            type="select" name="select" id="select_profesionales" placeholder=" Nombre del profesional"
                        />
                    </div>
                    <Button variant='classic' className='btn text-center bg-cyan-500 align-middle rounded-md shadow-md shadow-slate-800'>
                        <MagnifyingGlassIcon /> Buscar
                    </Button>
                </Flex>
                <Flex justify={"center"} align={"start"} className='cards'>
                    <Flex direction={'column'} align={'start'} justify={'center'} className="grp-cards bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 text-lg font-medium">Encuentra tu especialista </h2>
                        <p className="text-slate-800 grpcards-p">Las opiniones reales de miles de pacientes
                            te ayudarán a tomar siempre la mejor decisión</p>
                    </Flex>
                    <Flex direction={'column'} align={'start'} justify={'center'} className="grp-cards flex-wrap bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 text-lg font-medium">Pide cita de forma fácil </h2>
                        <p className="text-slate-800 grpcards-p">Elige la hora que prefieras y pide cita sin necesidad de llamar. 
                            Es fácil, cómodo y muy rápido.</p>
                    </Flex>
                    <Flex direction={'column'} align={'start'} justify={'center'} className="grp-cards bg-opacity-20 text-left bg-cyan-800">
                        <h2 className="text-slate-800 text-lg font-medium">Recordatorios por Mail </h2>
                        <p className="text-slate-800 grpcards-p">Te confirmamos la cita al instante y te enviamos un recordatorio 
                            a tu mail antes de la cita.</p>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}
