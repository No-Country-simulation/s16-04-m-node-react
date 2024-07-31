import { Blockquote, Heading, Text } from "@radix-ui/themes";
import "./css/historialcitas.css";
import Tabmenuhistorial from "./components/Tabmenuhistorial";

const HistorialCitas = () => {
  return (
    <>
      <div className="containerHistorialCitas">
        <Heading>Hola, Liza</Heading>
        <div className="bodyHistorialCitas">
            <section className="infoAfiliado">
          <div className="headAfiliado">Información de Afiliado</div>
          <div className="cuerpoAfiliado">
            <div className="lableAfiliado">
              <span>Afiliado:</span>
              <span>Servicio:</span>
              <span>Médico de familia:</span>
            </div>
            <div className="lableAfiliado">
              <span> C.C. 124568899  -  Liza Albertina Marquiz</span>
              <span> CONSULTA MEDICINA GENERAL SALUD CITA PRESENCIAL</span>
              <span> CÁRDENAS ALLISON ASTRID</span>
            </div>
          </div>
        </section>
        <Blockquote style={{ fontSize: ".8rem" }}>
          <Text style={{ fontWeight: "500" }}>IMPORTANTE</Text> <br />
          SEÑOR USUARIO, RECUERDE QUE A TRAVES DE ESTE MEDIO SOLO PODRA CANCELAR
          LAS CITAS DE MEDICINA GENERAL, ODONTOLOGIA, SALUD VISUAL Y MEDICO
          ESPECIALISTA. SI USTED TIENE CITAS ASIGNADAS QUE NO SE VISUALIZAN POR
          ESTA OPCIÓN, PARA SU CANCELACION COMUNIQUESE CON LA CENTRAL DE CITAS
          DE SU IPS.
        </Blockquote>
        <Tabmenuhistorial/>
        </div>
      </div>
    </>
  );
};

export default HistorialCitas;
