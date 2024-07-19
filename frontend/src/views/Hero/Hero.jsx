import '@radix-ui/themes/styles.css';
import { Flex, Text, Inset, Separator, Box, Container, Heading } from '@radix-ui/themes';
import '../../css/Hero.css';
import NavBar from "../../components/Navbar";
import { CalendarIcon, LaptopIcon, Pencil2Icon, CheckCircledIcon } from '@radix-ui/react-icons';
import doctorAvatar from "../../assets/3d-happy-cartoon-doctor.png";
import imagen9 from "../../assets/image9.png";
import imagen10 from "../../assets/image10.png";
import imagen11 from "../../assets/image11.png";
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
                    <LaptopIcon className='relative -top-9 size-7' />
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
        <Container height={'100vh'}>
            <Heading className='text-center font-semibold text-3xl pt-24 mb-20 pb-5'>Contenidos para tu bienestar</Heading>
            <Flex direction={'row'} gapX={'7'}>
                <Box className='flex-column' maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen11}
                            alt="Bold typography"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 140,
                                backgroundColor: 'var(--gray-5)',
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Lava bien tus manos para prevenir enfermedades La higiene es vital para evitar que se propaguen los virus y es importante asumirla como una conducta social, cívica y de salud pública pues es una forma de protegernos entre todos”. Así lo explica César Augusto López, médico epidemiólogo de SURA, con quien hablamos para compartirte algunas medidas de prevención de enfermedades.
                    </Text>
                </Box>
                <Flex align="center" gap="4" height="initial">
                    <Separator orientation="vertical" size="4" />
                </Flex>
                <Box className='flex-column' maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen10}
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 140,
                                backgroundColor: 'var(--gray-5)',
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Depresión posparto La melancolía posparto no es igual a la depresión, esto es algo que trasciende ese estado. Si quieres saber cómo detectarla o cómo apoyar a las madres que la padecen, escucha este episodio en el que las especialistas nos dan sus recomendaciones.
                    </Text>
                </Box>
                <Flex align="center" gap="4" height="initial">
                    <Separator orientation="vertical" size="4" />
                </Flex>
                <Box className='flex-column' maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen9}
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 140,
                                backgroundColor: 'var(--gray-5)',
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Menopausia y su impacto en el corazón La transición a la menopausia se asocia con un aumento del riesgo de enfermedad cardiovascular, relacionado fundamentalmente por una alteración del metabolismo de los lípidos y la glucosa, así como a la redistribución de la grasa corporal en las pacientes y esto va aumentando a medida que la edad se incrementa.
                    </Text>
                </Box>
            </Flex>
        </Container>
    </>
);

export default Hero;