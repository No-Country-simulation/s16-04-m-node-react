import React, { useState } from "react";
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

const Navbardash = () => {
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
            <Avatar.Image
              className="AvatarImage"
              src="https://wallpaper-house.com/data/out/9/wallpaper2you_298208.jpg"
              alt="Colm Tuite"
            />
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
