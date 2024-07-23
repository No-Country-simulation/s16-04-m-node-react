import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Logo from "../assets/CHEALTH.png";
import { Flex, Button, Container } from '@radix-ui/themes';
import { Link } from 'react-router-dom'


const Navbar = () => (
    <div >
        <Container position={'absolute'} justify={'between'} style={{ width: "100%" }}>
            <Flex className="h-0 flex-1 relative justify-start pl-20 top-16 z-[5] items-center">
                <a href="#">
                    <img
                        src={Logo}
                        className="w-24"
                    />
                </a>
            </Flex>
            <Flex justify={'center'}>
                <NavigationMenu.Root className="relative top-5 z-[1] flex flex-wrap flex-1 h-0 justify-center align-middle items-center">
                    <NavigationMenu.List className=" flex flex-wrap m-5 list-none rounded-[6px] bg-blue-200 p-1 shadow-lg">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer">Servicios</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer">Especialidades</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer">Nuestro Blog</NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer">Caracteristicas</NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </Flex>
            <Link to='login'>
                <Flex className="relative justify-end top-10 z-[1] h-0">
                    <Button className='h-10 bg-cyan-500 border-cyan-700 border-2 hover:bg-cyan-700 hover:border-spacing-1 hover:border-2 hover:border-cyan-900 rounded-md shadow-lg shadow-slate-900 leading-none font-medium cursor-pointer'>Portal de Acceso</Button>
                </Flex>
            </Link>
        </Container>
    </div>
);

export default Navbar;