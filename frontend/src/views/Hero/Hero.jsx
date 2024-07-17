import '@radix-ui/themes/styles.css';
import { Flex, Text, Box, Container } from '@radix-ui/themes';
import '../../css/Hero.css';

const Hero = () => (
    < >
        <Container className="bg-image w-[100vw] h-[100vh] overflow-hidden">           
                <Flex direction="column" gap="4" >
                    <Box className='relative top-[5em]' width="50vw" height="20vh">
                        <Text className='text-blue-200' size='6' >Transforma la manera en que gestionas 
                            los turnos médicos con nuestra aplicación intuitiva.
                            Experimenta un proceso de gestion más fluido, acceso conveniente a tus registros
                            y una comunicación mejorada con tus pacientes.</Text>
                            
                    </Box>
                </Flex>
        </Container>
    </>
);

export default Hero;