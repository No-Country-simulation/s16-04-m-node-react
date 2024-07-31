import { Button, Heading,  Text } from "@radix-ui/themes";
import "../css/proximacita.css";

const Cardproximacita = () => {
  return (
    <div className="containerProximacita">
      <section className="dataproxima">
        <div className="fechaproximo">
            <span className="diaproximo">
               <span>JUL</span>   
               <span>9</span>   
            </span>
            <span className="horaproximo">
                10:00 am.
            </span>
        </div>
        <div className="doctorproximo">
            <Heading style={{color:'#219ebc'}}>Consulta por primara vez</Heading>
            <secton className="doctorproximoselect">
                <img src="https://wallpaper-house.com/data/out/9/wallpaper2you_298208.jpg" alt="doctorproximo" />
                <div className="textdoctorproximoselect">
                    <Text>Profesional: Andrés Lopez</Text>
                    <Text>Neurólogo</Text>
                </div>
            </secton>
        </div>
        <div className="detallproximo">
        <Text>IPS</Text>
        <Text>Sanitas</Text>
        <Text>Nuestro Bogotá</Text>
        </div>
      </section>
      <section className="btnprxima">
        <Button>Reprogramar</Button>
        <Button>Cancelar Cita</Button>
      </section>
    </div>
  );
};

export default Cardproximacita;
