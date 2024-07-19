import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Logo from "../assets/CHEALTH.png";
import { Box, Flex, Button } from '@radix-ui/themes';



const NavBar = () => (
    <>
        <Flex direction={'row'} justify={'around'} gap={'9'} >
            <Box className="w-1/5 h-0 relative left-20 top-20 z-[5] flex items-center">
                <a href="#">
                    <img
                        src={Logo}
                        className="w-24"
                    />
                </a>
            </Box>
            <NavigationMenu.Root className="relative top-5 z-[1] flex h-0 justify-between ml-20">
                <NavigationMenu.List className="m-5 flex list-none rounded-[6px] bg-blue-200 p-1 shadow-lg">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer" >Servicios</NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer" >Especialidades</NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer" >Nuestro Blog</NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none hover:text-cyan-700 cursor-pointer">Testimonios</NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>

            </NavigationMenu.Root>
        </Flex>
        <Flex className="relative justify-end end-40 top-10 z-[1] h-0">
            <Button className='h-10 bg-cyan-500 border-cyan-700 border-2 hover:bg-cyan-700 hover:border-spacing-1 hover:border-2 hover:border-cyan-900 rounded-md shadow-lg shadow-slate-900 leading-none font-medium cursor-pointer'>Portal de Acceso</Button>
        </Flex>
    </>
);

export default NavBar;