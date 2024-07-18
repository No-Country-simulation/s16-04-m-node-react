import '@radix-ui/themes/styles.css';
import { Flex, Text, Box, Container, Heading } from '@radix-ui/themes';
import '../../css/Hero.css';
import NavBar from "../../components/Navbar";
import { CalendarIcon, LaptopIcon, Pencil2Icon, CheckCircledIcon } from '@radix-ui/react-icons';
import doctorAvatar from "../../assets/3d-happy-cartoon-doctor.png";

const Hero = () => (
    < >
        <NavBar />
        <Container className="bg-image w-[100vw] h-[100vh] overflow-hidden">
            <Flex direction="row" gap="4" >
                <Box className='relative top-[8em]' width="50vw" height="20vh">
                    <Text className='text-blue-200' size='6' >Transforma la manera en que gestionas
                        los turnos médicos con nuestra aplicación intuitiva.
                        Experimenta un proceso de gestion más fluido, acceso conveniente a tus registros
                        y una comunicación mejorada con tus pacientes.</Text>
                </Box>
            </Flex>
        </Container>
        <Container className='w-[100vw] h-[100vh] justify-center overflow-hidden bg-sky-950 forced-colors: text-cyan-100'>
            <Heading className='text-center font-semibold text-4xl mb-20 pb-5' >Servicios</Heading>
            <Flex className='justify-between'>
                <Box className='relative top-14 size-72'>
                    <LaptopIcon className='relative -top-9 size-7'/>
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Reserva de Citas
                    </Heading>
                    <Text as='p' size="3" className='text-left text-cyan-100 font-normal w-72'>
                        Permite reservar citas online 24/7. Gestione sus turnos con facilidad y rapidez. Dedique mas tiempo a la atencion medica.
                    </Text>
                </Box>
                <Box className='relative top-14 size-72'>
                    <CalendarIcon className='relative -top-9 size-7 ' />
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Calendario
                    </Heading>
                    <Text as='p' size="3" className='text-left font-normal w-72'>
                        Cree un nuevo reporte médico y marque los canales de adquisición mientras realiza las reservas de sus citas. Los horarios se sincronizarán automáticamente con los calendarios integrados en su teléfono, tableta o laptop..
                    </Text>

                </Box>
                <Box className='relative top-14 size-72'>
                    <Pencil2Icon className='relative -top-9  size-7 ' />
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Expediente Medico Seguro
                    </Heading>
                    <Text as='p' size="3" className='text-left font-normal w-72'>
                        El software de programación de citas médicas en línea permite a los especialistas adjuntar notas a <u>un perfil del paciente</u>. Almacene una copia de seguridad digital de los historiales médicos.
                    </Text>
                </Box>
            </Flex>
        </Container>
        <Container className='h-[100vh] flex-row justify-center'>
            <Heading className='text-4xl text-cyan-800 pb-24 w-3/4'>Todo lo que necesita para la gestión de su clínica de manera exitosa y eficiente</Heading>
            <Box className=' pl-10 justify-start'>
                <Flex gapX={'4'} justify={'start'} align={'middle'} py={'4'} ><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Mejor experiencia de sus pacientes</Text></Flex>
                <Flex gapX={'4'} justify={'start'} align={'middle'} py={'4'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Registros Médicos Seguros</Text></Flex>
                <Flex gapX={'4'} justify={'start'} align={'middle'} py={'4'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Bajos costos administrativos</Text></Flex>
            </Box>
            <Flex className='justify-end'>
                <Box className='relative h-0 -top-32 right-0'>
                    <img className='pl-20' src={doctorAvatar} alt="doc" />
                </Box>
            </Flex>
        </Container>
        <Container className='bg-image2'>
            <Heading className='text-center text-cyan-800 font-semibold text-4xl pb-36' >Especialidades</Heading>
            <Flex justify={'between'} align={'center'} gapX={'9'} pt={'9'} mt={'9'}>
                <Box align={'center'} width={'90%'} >
                    <Heading className='border-2 bg-indigo-300 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Cardiologia</Heading>
                    <Text as='p' className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                        Nuestra clínica cuenta con un departamento de cardiología especializado y equipado con las últimas tecnologías para garantizar a nuestros pacientes un tratamiento completo y de calidad.
                    </Text>
                </Box>
                <Box align={'center'} width={'90%'} >
                    <Heading className='border-2 bg-lime-200 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Neurologia</Heading>
                    <Text as='p' className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                        Nuestra clínica cuenta con un departamento de cardiología especializado y equipado con las últimas tecnologías para garantizar a nuestros pacientes un tratamiento completo y de calidad.
                    </Text>
                </Box>
                <Box align={'center'} width={'90%'} >
                    <Heading className='border-2 bg-pink-200 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Ortopedia</Heading>
                    <Text as='p' className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                        Nuestra clínica cuenta con un departamento de cardiología especializado y equipado con las últimas tecnologías para garantizar a nuestros pacientes un tratamiento completo y de calidad.
                    </Text>
                </Box>
            </Flex>
        </Container>
        <Container>
            <Heading className='text-center font-semibold text-3xl pt-24 mb-20 pb-5'>Contenidos para tu bienestar</Heading>
            <Flex>
                
                
            </Flex>
        </Container>
    </>
);

export default Hero;