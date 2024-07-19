import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Logo from "../assets/CHEALTH.png";
import { Box, Flex } from '@radix-ui/themes';
import PortalDeAcceso from "../components/PortalDeAcceso";


const Navbar = () => (
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
            <NavigationMenu.Root className="relative top-5 z-[1] flex h-0 justify-center">
                <NavigationMenu.List className="center m-5 flex list-none rounded-[6px] bg-blue-200 p-1 shadow-[0_2px_10px]">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer" >Servicios</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer" >Especialidades</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer" >Nuestro Blog</NavigationMenu.Link>
                    </NavigationMenu.Item>
                    
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="group flex select-none items-center 
                    justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium 
                    leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer">Testimonios</NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <PortalDeAcceso />
            </NavigationMenu.Root>
        </Flex>
    </>
);

export default Navbar;