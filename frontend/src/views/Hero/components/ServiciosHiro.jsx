import "../css/servicioHero.css";
import { GoDeviceDesktop, GoCalendar, GoFileDirectory } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import Doctor from '../../../assets/3d-happy-cartoon-doctor.png'

const ServiciosHiro = () => {
  const dataServicio = [
    {
      icon: <GoDeviceDesktop />,
      title: "Reserva de Citas",
      description:
        "Permite reservar citas online 24/7. Gestione sus turnos con facilidad y rapidez. Dedique mas tiempo a la atencion medica.",
    },
    {
      icon: <GoCalendar />,
      title: "Calendario",
      description:
        "Cree un nuevo reporte médico y marque los canales de adquisición mientras realiza las reservas de sus citas.",
    },
    {
      icon: <GoFileDirectory />,
      title: "Expediente Médico",
      description:
        "Almacene una copia de seguridad digital de los historiales médicos.",
    },
  ];

  return (
    <>
      <div className="containerServicioHero">
        <section className="servicios">
          <h1>Servicios</h1>
          <section>
            <section className="listCardservicio">
              {dataServicio.map((servicio, index) => (
                <div key={index} className="cardServicio">
                  <span>{servicio.icon}</span>
                  <h2>{servicio.title}</h2>
                  <p>{servicio.description}</p>
                </div>
              ))}
            </section>
          </section>
        </section>
        <section className="caracteristicas">
          <h1>
            Todo lo que necesita para la gestión de su clínica de <br /> manera
            exitosa y eficiente
          </h1>
          <div className="listCaracteristicas">
            <section className="itemList">
              <span>
                <FiCheckCircle />
              </span>
              <p>Mejor experiencia de sus pacientes</p>
            </section>
            <section className="itemList">
              <span>
                <FiCheckCircle />
              </span>
              <p>Bajos costos administrativos</p>
            </section>
            <section className="itemList">
              <span>
                <FiCheckCircle />
              </span>
              <p>Registros Médicos Seguros</p>
            </section>
          </div>
        </section>
      <img src={Doctor} alt="doctor" className="imgDoctor"/>
      </div>
    </>
  );
};

export default ServiciosHiro;
