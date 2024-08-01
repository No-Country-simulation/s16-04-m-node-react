import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Flex, Container } from '@radix-ui/themes';
import "./css/NavPatientsHome.css"
import Logo from "../../assets/CHEALTH.png";

export const NavPatientsHome = () => {
    return (
        <div>
            <Container justify={'center'}>
                <Flex className='navpatientshome'>
                    <div className='navpatientshome-logo'>
                        <img src={Logo} alt="logo_app_CHealth" />
                    </div>
                    <NavigationMenu.Root className="flex flex-wrap 
                    flex-1 justify-center align-middle items-center">
                        <NavigationMenu.List className="flex flex-wrap m-5 list-none 
                         p-1 navpatientshome-list">
                            <NavigationMenu.Item>
                                <NavigationMenu.Link
                                    className="text-wrap navpatientshome-link text-cyan-200 
                                     focus:shadow-slate-800 select-none px-3 
                                     py-2 no-underline 
                                     outline-none focus:text-cyan-900"
                                    href="#protegerdatos">
                                    Como protegemos los datos?
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link
                                    className="text-wrap navpatientshome-link text-cyan-200  
                                    select-none px-3 py-2 no-underline outline-none focus:text-cyan-900"
                                    href="#faq">
                                    Preguntas frecuentes
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link
                                    className="text-wrap navpatientshome-link text-cyan-200  
                                    select-none px-3 py-2 no-underline outline-none focus:text-cyan-900"
                                    href="#contacto">
                                    Canales de contacto
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
                </Flex>
            </Container>
        </div>
    )
}
