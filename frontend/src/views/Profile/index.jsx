import { Blockquote, Heading } from "@radix-ui/themes";
import EditProfile from "./components/EditProfile";
import "./css/profile.css";
import * as Separator from '@radix-ui/react-separator';
import ContactUser from "./components/ContactUser";
import CuentaUser from "./components/CuentaUser";

const Profile = () => {
  return (
    <>
      <div className="containerProfile">
        <section className="portadaImg"></section>
        <section className="contentProfile">
          <div className="avataruser">
            <div className="contentAvatar">
              <img
                src="https://wallpaper-house.com/data/out/9/wallpaper2you_298208.jpg"
                alt="avatar"
              />
            </div>
            <Heading className="heading">Dr. Juan Pérez</Heading>
          </div>

          <EditProfile />
        </section>
        <Blockquote>
        Bienvenido a su perfil. Aquí puede gestionar y actualizar su información personal para asegurar que siempre tenga acceso a los datos más recientes.
        </Blockquote>
        <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
        <ContactUser/>
        <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
        <CuentaUser/>
      </div>
    </>
  );
};

export default Profile;
