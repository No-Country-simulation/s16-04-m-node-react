import { Text } from "@radix-ui/themes";
import "../css/contactUser.css";
import * as Label from "@radix-ui/react-label";

const CuentaUser = () => {
  return (
    <>
      <div className="containerContactUser">
        <section className="titleContact">
          <h2>Cuenta</h2>
          <p>
          Aquí puede gestionar la configuración de su cuenta, incluyendo su correo electrónico registrado y contraseña, para mantener su cuenta segura y actualizada.
          </p>
        </section>
        <section className="dataContact">
          <div
            style={{
              display: "flex",
              padding: "0 20px",
              flexWrap: "wrap",
              gap: 15,
              alignItems: "center",
            }}
          >
            <Label.Root className="LabelRoot" htmlFor="firstName">
              Email Principal:
            </Label.Root>
            <Text>juan.perez@example.com</Text>
          </div>
          <div
            style={{
              display: "flex",
              padding: "0 20px",
              flexWrap: "wrap",
              gap: 15,
              alignItems: "center",
            }}
          >
            <Label.Root className="LabelRoot" htmlFor="firstName">
              Contraseña:
            </Label.Root>
            <Text>Juan-2024</Text>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuentaUser;
