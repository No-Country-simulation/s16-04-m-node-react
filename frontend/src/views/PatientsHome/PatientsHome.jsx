import '@radix-ui/themes/styles.css';
import { Flex, Text, Container } from '@radix-ui/themes';
import ImagenDocs from "../../assets/vector_docs.png";

export const PatientsHome = () => {
    return (
        <div>
            <Container maxWidth={'100vw'} maxHeight={'100vh'} className="bg-cyan-400">
                <Flex direction={"row"} className='relative flex-wrap'>
                    <Text className='text-blue-200 text-wrap text-left'>Encuentra tu especialista y pide cita.
                    </Text>
                    <div>
                        <img src={ImagenDocs} alt="vectores_Docs" />
                    </div>
                </Flex>
                <Flex>
                    <div className="searchinput flex gap-1 border-2 border-solid border-slate-400 outline-none ring-1 rounded-md align-middle text-center p-1" >
                        <input className="outline-none tarjeta px-10 text-center" type="search" name="search" id="search" placeholder=" Especialidad" />
                    </div>
                    <div className="searchinput flex gap-1 border-2 border-solid border-slate-400 outline-none ring-1 rounded-md align-middle text-center p-1" >
                        <input className="outline-none tarjeta px-10 text-center" type="search" name="search" id="search" placeholder=" Nombre del profesional" />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}
