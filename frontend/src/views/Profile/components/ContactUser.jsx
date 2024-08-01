import { Text } from "@radix-ui/themes";
import "../css/contactUser.css";
import * as Label from "@radix-ui/react-label";

const ContactUser = () => {
  return (
    <>
      <div className="containerContactUser">
        <section className="titleContact">
          <h2>Contactos</h2>
          <p>
            En esta sección, puede actualizar su información de contacto para
            asegurarse de que siempre podamos comunicarnos con usted de manera
            efectiva.
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
              Email Secundario:
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
              Teléfono:
            </Label.Root>
            <Text>+34 612 345 678</Text>
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
              Dirección:
            </Label.Root>
            
              <Text>Calle Mayor 123, 28013 Madrid, España</Text>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUser;
