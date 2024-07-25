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
        <Container maxWidth={'100vw'} maxHeight={'100vh'} className="bg-image overflow-hidden">
            <Flex direction={"row"} className='hero relative flex-wrap'>
                <Text className='text-blue-200 hero-text text-wrap text-left'>Transforme la manera en que gestiona
                    los turnos médicos con nuestra aplicación intuitiva.
                    Experimente un proceso de gestion más fluido, acceso conveniente a sus registros
                    y una comunicación mejorada con sus pacientes.
                </Text>
            </Flex>
        </Container>
        <Container id='servicios' className='bg-sky-950 servicios-contenedor flex forced-colors: text-cyan-100' maxWidth={'100%'} height={'100vh'}>
            <Flex maxWidth={'100vw'} className='servicios-titulo-wrapper flex-wrap text-wrap justify-center'>
                <Heading className='servicios-titulo text-center'>Servicios</Heading>
            </Flex>
            <Flex className='servicios-wrapper flex-wrap flex-row' justify={'center'}>
                <Flex direction={'column'} width="30%" height="18rem" className='servicios-card flex-0 text-wrap relative'>
                    <LaptopIcon className='size-7 ' />
                    <Heading maxwidth="auto" className='text-cyan-100 servicios-nombres'>
                        Reserva de Citas
                    </Heading>
                    <Text as='p' width="auto" className='flex-0 text-wrap flex-shrink text-left text-cyan-100 font-normal'>
                        Permite reservar citas online 24/7. Gestione sus turnos con facilidad y rapidez. Dedique mas tiempo a la atencion medica.
                    </Text>
                </Flex>
                <Flex direction={'column'} width='30%' height="18rem" className='servicios-card flex-0 text-wrap relative' >
                    <CalendarIcon className='size-7 ' />
                    <Heading maxwidth="auto" className='text-cyan-100 servicios-nombres'>
                        Calendario
                    </Heading>
                    <Text as='p' width="auto" className='text-left flex-0 text-wrap flex-shrink font-normal'>
                        Cree un nuevo reporte médico y marque los canales de adquisición mientras realiza las reservas de sus citas. Los horarios se sincronizarán automáticamente con los calendarios integrados en su teléfono, tableta o laptop..
                    </Text>

                </Flex>
                <Flex direction={'column'} width='30%' height="18rem" className='servicios-card flex-0 text-wrap relative'>
                    <Pencil2Icon className='size-7' />
                    <Heading maxwidth="auto" className='text-cyan-100 servicios-nombres'>
                        Expediente Medico Seguro
                    </Heading>
                    <Text as='p' width="auto" className='text-left flex-0 text-wrap flex-shrink font-normal'>
                        El software de programación de citas médicas en línea permite a los especialistas adjuntar notas a <u>un perfil del paciente</u>. Almacene una copia de seguridad digital de los historiales médicos.
                    </Text>
                </Flex>
            </Flex>
        </Container>
        <Container id='caracteristicas' className='caracteristicas'>
            <Flex>
                <Heading justify={'start'} className='caract-titulo text-cyan-800'>Todo lo que necesita para la gestión de su clínica de manera exitosa y eficiente</Heading>
            </Flex>
            <Flex direction={'row'} align={'center'} justify={'between'} gapX={'9'}>
                <Flex className='caract-p' direction={'column'} maxWidth={'85%'} style={{ flexWrap: "wrap" }}>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'3'} ><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='caract-line'>Mejor experiencia de sus pacientes</Text></Flex>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'3'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='caract-line'>Bajos costos administrativos</Text></Flex>
                    <Flex gapX={'2'} justify={'start'} align={'middle'} py={'3'}><CheckCircledIcon className='size-7 forced-colors: text-slate-500' /><Text className='caract-line'>Registros Médicos Seguros</Text></Flex>
                </Flex>

                <Flex className=' doc relative justify-end pt-5'>
                    <img
                        width="325px"
                        src={doctorAvatar}
                        alt="doc" />
                </Flex>
            </Flex>
        </Container>
        <Container id="especialidades" className='especialidades bg-image2'>
            <Flex justify={'center'} pt={'3'}>
                <Heading className='esp-titulo text-center font-semibold text-cyan-800 text-4xl'>Especialidades</Heading>
            </Flex>
            <Flex className='grp-cards'>
                <Flex className='espcl-tarjeta' direction={'column'} justify={'center'} align={'center'} width={'30%'} style={{ flexWrap: "wrap" }}>
                    <Heading className='titulo-tarjeta flex border-2 bg-indigo-300 shadow-md shadow-slate-800 rounded-lg'>Cardiologia</Heading>
                    <Flex className='contenedor-tarjeta' width={'25vw'} height={'auto'}>
                        <Text as='p' size={'4'} className='tarjeta-espcl text-wrap border-2 bg-slate-200 shadow-md shadow-slate-900 rounded-md'>
                            Nuestra clínica cuenta con un departamento de cardiología especializado y equipado con las últimas tecnologías para garantizar a nuestros pacientes un tratamiento completo y de calidad.
                        </Text>
                    </Flex>
                </Flex>
                <Flex className='espcl-tarjeta' direction={'column'} justify={'center'} align={'center'} width={'30%'} style={{ flexWrap: "wrap" }}>
                    <Heading className='titulo-tarjeta flex flex-wrap border-2 bg-lime-200 shadow-md shadow-slate-800 rounded-lg'>Neurologia</Heading>
                    <Flex className='contenedor-tarjeta' width={'25vw'} height={'auto'} >
                        <Text as='p' size={'4'} className='tarjeta-espcl text-wrap border-2 bg-slate-200 shadow-md shadow-slate-900 rounded-md'>
                            El departamento de neurología es el mejor para diagnosticar y tratar incluso las afecciones neurológicas más difíciles.
                        </Text>
                    </Flex>
                </Flex>
                <Flex className='espcl-tarjeta' direction={'column'} justify={'center'} align={'center'} width={'30%'} style={{ flexWrap: "wrap" }}>
                    <Heading className='titulo-tarjeta flex flex-wrap border-2 bg-pink-200 shadow-md shadow-slate-800 rounded-lg'>Ortopedia</Heading>
                    <Flex className='contenedor-tarjeta' width={'25vw'} height={'auto'} >
                        <Text as='p' size={'4'} className='tarjeta-espcl text-wrap border-2 bg-slate-200 shadow-md shadow-slate-900 rounded-md'>
                            Los especialistas en ortopedia de nuestra clínica brindan tratamientos tanto quirúrgicos como no quirúrgicos para la artritis y las lesiones.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
        <Container id='nuestroBlog' className='blog'>
            <Heading className='blog-titulo text-center justify-center flex flex-wrap text-cyan-800'>Contenidos para tu bienestar</Heading>
            <Flex direction={'row'} gapX={'3'} style={{ flexWrap: "wrap" }}>
                <Flex className='blog-articulo'>
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
                <Flex className='blog-articulo'>
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
                <Flex className='blog-articulo'>
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