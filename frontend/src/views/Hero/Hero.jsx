import '@radix-ui/themes/styles.css';
import { Flex, Text, Inset, Separator, Container, Heading } from '@radix-ui/themes';
import '../../css/Hero.css';
import Navbar from "../../components/Navbar";
import { CalendarIcon, LaptopIcon, Pencil2Icon, CheckCircledIcon } from '@radix-ui/react-icons';
import doctorAvatar from "../../assets/3d-happy-cartoon-doctor.png";
import imagen9 from "../../assets/image9.png";
import imagen10 from "../../assets/image10.png";
import imagen11 from "../../assets/image11.png";
const Hero = () => (
    < div style={{ height: "100%", width: "100%" }} >
        <Navbar />
        <Container className="bg-image w-[screen] h-[screen] overflow-hidden" >
            <Flex direction="row" gap="4" className='flex-wrap'>
                <Flex className='relative top-[8em] flex-wrap' width="50vw" height="20vh">
                    <Text className='text-blue-200' size='6' >Transforma la manera en que gestionas
                        los turnos médicos con nuestra aplicación intuitiva.
                        Experimenta un proceso de gestion más fluido, acceso conveniente a tus registros
                        y una comunicación mejorada con tus pacientes.</Text>
                </Flex>
            </Flex>
        </Container>
        <Container id='servicios' pt={'4'} align={'center'} className='bg-sky-950 forced-colors: text-cyan-100' maxWidth={'100%'} height={'100vh'}>
            <Flex maxWidth={'100vw'} className='flex-wrap text-wrap justify-center py-3'>
                <Heading className='text-center align-center font-semibold text-4xl pb-5' >Servicios</Heading>
            </Flex>
            <Flex className='flex-wrap' justify={'center'} align={'center'}>
                <Flex direction={'column'} align={'center'} className='flex-0 text-wrap flex-shrink relative top-14 size-72' style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                    <LaptopIcon className='relative -top-9 size-7' />
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Reserva de Citas
                    </Heading>
                    <Text as='p' size="3" className='text-left text-cyan-100 font-normal w-72'>
                        Permite reservar citas online 24/7. Gestione sus turnos con facilidad y rapidez. Dedique mas tiempo a la atencion medica.
                    </Text>
                </Flex>
                <Flex direction={'column'} className='relative top-14 size-72' style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                    <CalendarIcon className='relative -top-9 size-7 ' />
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Calendario
                    </Heading>
                    <Text as='p' size="3" className='text-left flex-0 text-wrap flex-shrink font-normal w-72'>
                        Cree un nuevo reporte médico y marque los canales de adquisición mientras realiza las reservas de sus citas. Los horarios se sincronizarán automáticamente con los calendarios integrados en su teléfono, tableta o laptop..
                    </Text>

                </Flex>
                <Flex direction={'column'} className='relative top-14 size-72' style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                    <Pencil2Icon className='relative -top-9  size-7'/>
                    <Heading className='w-72 text-cyan-100 pb-7'>
                        Expediente Medico Seguro
                    </Heading>
                    <Text as='p' size="3" className='text-left flex-0 text-wrap flex-shrink font-normal w-72'>
                        El software de programación de citas médicas en línea permite a los especialistas adjuntar notas a <u>un perfil del paciente</u>. Almacene una copia de seguridad digital de los historiales médicos.
                    </Text>
                </Flex>
            </Flex>
        </Container>
        <Container id='caracteristicas' className='flex-row flex-wrap' width={'100%'} height={'100vh'} justify={'center'}>
            <Flex className='flex-wrap'>
                <Heading justify={'start'} className='text-4xl text-cyan-800 pl-24 pt-36 pb-24'>Todo lo que necesita para la gestión de su clínica de manera exitosa y eficiente</Heading>
            </Flex>
            <Flex direction={'row'} justify={'between'}>
                <Flex direction={'column'} maxWidth={'50%'} className=' pl-24 justify-start' style={{ flexWrap: "wrap" }}>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'4'} ><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Mejor experiencia de sus pacientes</Text></Flex>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'4'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Registros Médicos Seguros</Text></Flex>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'4'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='text-2xl font-medium'>Bajos costos administrativos</Text></Flex>
                </Flex>

                <Flex className='relative justify-end'>
                    <img
                        width="325px"
                        src={doctorAvatar}
                        alt="doc" />
                </Flex>
            </Flex>
        </Container>
        <Container id="especialidades" justify={'center'} align={'center'} className='bg-image2' width={'100%'} height={'100vh'} style={{ display: "flex", flexWrap: "wrap" }}>
            <Heading className='flex justify-center text-center text-cyan-800 font-semibold text-4xl py-20'>Especialidades</Heading>
            <Flex direction={'row'} justify={'center'} align={'center'} gapX={'3'} pt={'9'} style={{ flexWrap: "wrap" }} >
                <Flex direction={'column'} justify={'center'} align={'center'} width={'32%'} style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                    <Heading className='border-2 bg-indigo-300 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Cardiologia</Heading>
                    <Flex width={'22vw'} height={'33vh'} style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                        <Text as='p' size={'4'} className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                            Nuestra clínica cuenta con un departamento de cardiología especializado y equipado con las últimas tecnologías para garantizar a nuestros pacientes un tratamiento completo y de calidad.
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} justify={'center'} align={'center'} width={'32%'} >
                    <Heading className='border-2 bg-lime-200 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Neurologia</Heading>
                    <Flex width={'22vw'} height={'33vh'} style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                        <Text as='p' size={'4'} className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                            El departamento de neurología es el mejor para diagnosticar y tratar incluso las afecciones neurológicas más difíciles.
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} justify={'center'} align={'center'} width={'32%'} >
                    <Heading className='border-2 bg-pink-200 shadow-md shadow-slate-800 px-12 py-4 rounded-lg font-normal mb-5'>Ortopedia</Heading>
                    <Flex width={'22vw'} height={'33vh'} style={{ sm:{ direction:"row", justifyContent: "center", flexWrap:"wrap"}}}>
                        <Text as='p' size={'4'} className=' border-2 bg-slate-200 shadow-md shadow-slate-900 p-4 rounded-md'>
                            Los especialistas en ortopedia de nuestra clínica brindan tratamientos tanto quirúrgicos como no quirúrgicos para la artritis y las lesiones.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
        <Container id='nuestroBlog' maxWidth={'100vw'} height={'100vh'} p="9" style={{ flexWrap: "wrap" }}>
            <Heading className='text-center font-semibold text-3xl pt-24 mb-20 pb-5'>Contenidos para tu bienestar</Heading>
            <Flex direction={'row'} gapX={'3'} style={{ flexWrap: "wrap" }}>
                <Flex direction={'column'} maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen11}
                            alt="lavarse"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: "21.43vh",
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Lava bien tus manos para prevenir enfermedades La higiene es vital para evitar que se propaguen los virus y es importante asumirla como una conducta social, cívica y de salud pública pues es una forma de protegernos entre todos”. Así lo explica César Augusto López, médico epidemiólogo de SURA, con quien hablamos para compartirte algunas medidas de prevención de enfermedades.
                    </Text>
                </Flex>
                <Flex align="center" gap="4" height="initial">
                    <Separator orientation="vertical" size="4" />
                </Flex>
                <Flex direction={'column'} maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen10}
                            alt="depresion"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: "21.43vh",
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Depresión posparto La melancolía posparto no es igual a la depresión, esto es algo que trasciende ese estado. Si quieres saber cómo detectarla o cómo apoyar a las madres que la padecen, escucha este episodio en el que las especialistas nos dan sus recomendaciones.
                    </Text>
                </Flex>
                <Flex align="center" gap="4" height="initial">
                    <Separator orientation="vertical" size="4" />
                </Flex>
                <Flex direction={'column'} maxWidth={'30%'}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src={imagen9}
                            alt="menopausia"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: "21.43vh",
                            }}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        Menopausia y su impacto en el corazón La transición a la menopausia se asocia con un aumento del riesgo de enfermedad cardiovascular, relacionado fundamentalmente por una alteración del metabolismo de los lípidos y la glucosa, así como a la redistribución de la grasa corporal en las pacientes y esto va aumentando a medida que la edad se incrementa.
                    </Text>
                </Flex>
            </Flex>
        </Container>
    </div>
);

export default Hero;