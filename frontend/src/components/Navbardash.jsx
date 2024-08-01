import { useState } from "react";
import { Flex } from "@radix-ui/themes";
import "../css/navbar.css";
import * as Avatar from "@radix-ui/react-avatar";
import Logo from "./Logo";
import Menunavbar from "./Menunavbar";
import { FiBell } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slice/appearanceSlice";
import NotificationList from "./NotificationList";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const Navbardash = () => {

  const auth = useAuthUser();
  const [user, setUser] = useState(auth)
  const dispatch = useDispatch();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { message: "Nueva cita agendada" },
    { message: "Recordatorio: Consulta mañana a las 10 AM" },
  ]);

  const handletheme = () => {
    dispatch(toggleTheme());
  };

  const handleNotificaciones = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <Flex
        justify="between"
        align="center"
        style={{ height: "100%", width: "100%", padding: "0 1rem" }}
      >
        <Logo />
        <Flex
          justify="center"
          align="center"
          gap="15px"
          style={{ height: "100%", padding: "0 1rem" }}
        >
          <LuMoon onClick={handletheme} />
          <div className="notificaciones">
            <FiBell className="iconNotificacion" onClick={handleNotificaciones} />
            <span className="numberNotificacion">2</span>
            {showNotifications && (
              <NotificationList
                notifications={notifications}
                onClose={() => setShowNotifications(false)}
              />
            )}
          </div>
          <Avatar.Root className="AvatarRoot">
            {user.rol === 'professional' &&
             <Avatar.Image
              className="AvatarImage"
              src="https://wallpaper-house.com/data/out/9/wallpaper2you_298208.jpg"
              alt="Colm Tuite"
            />
            }
            {user.rol === 'patient' &&
             <Avatar.Image
              className="AvatarImage"
              src="https://media.istockphoto.com/id/512735004/es/foto/retrato-de-una-joven-hermosa-mujer.webp?b=1&s=170667a&w=0&k=20&c=IAGGRsM9c8wy67FCAq5mcmnhp5DYL3S5_UBBVJ8A-jY="
              alt="Colm Tuite"
            />
            }
           
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              CT
            </Avatar.Fallback>
          </Avatar.Root>
          <Menunavbar />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbardash;
