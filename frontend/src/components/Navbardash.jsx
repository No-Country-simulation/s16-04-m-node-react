import { Flex } from "@radix-ui/themes";
import "../css/navbar.css";
import * as Avatar from "@radix-ui/react-avatar";
import Logo from "./Logo";
import Menunavbar from "./Menunavbar";
import { FiBell } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slice/appearanceSlice";

const Navbardash = () => {

  const dispatch = useDispatch()

  const handletheme = ()=>{
      dispatch(toggleTheme())
  }

  return (
    <>
      <Flex
        justify="between"
        align="center"
        style={{ height: "100%", width: "100%", padding: "0 1rem"}}
      >
        <Logo />
        <Flex
        justify="center"
        align="center"
        gap='15px'
        style={{ height: "100%", padding: "0 1rem"}}
      >
        <LuMoon
        onClick={handletheme}
        />
       <FiBell />
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
        <Menunavbar/>
      </Flex>
        
      </Flex>
    </>
  );
};

export default Navbardash;