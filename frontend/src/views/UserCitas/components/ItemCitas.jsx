import { useState } from "react";
import { Separator, Text } from "@radix-ui/themes";
import "../css/itemtuscitas.css";
import { FiMapPin } from "react-icons/fi";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{toolbar.label}</span>
    </div>
  );
};

const ItemCitas = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Ingrese su dni para agendar la cita");
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  return (
    <>
      <div className="contentitemcitas">
        <section className="detallDoctor">
          <div className="Doctor">
            <img
              src="https://wallpaper-house.com/data/out/9/wallpaper2you_298208.jpg"
              alt="doctor"
            />
            <div className="contentDoctor">
              <Text>Prof. Andres Lopez</Text>
              <Text>Medicina General</Text>
            </div>
          </div>
          <span className="listItemDoctorDetall">
            <FiMapPin style={{ color: "#00b4d8" }} />
            <Text style={{ fontWeight: "500" }}>Carrera 15 # 23 - 91 Bogotá</Text>
          </span>
          <span className="listItemDoctorDetall">
            <LiaNotesMedicalSolid style={{ color: "#00b4d8" }} />
            <Text style={{ fontWeight: "500" }}>Visita Medicina General</Text>
          </span>
        </section>
        <Separator orientation="vertical" my="1" size="4" />
        <section className="selectCita">
          <div style={{ height: "13rem", width: "100%" }}>
            <Calendar
              selectable
              localizer={localizer}
              events={events}
              defaultView="week"
              views={["week", "day"]}
              step={30}
              onSelectSlot={handleSelectSlot}
              style={{ height: "100%", width: "100%" }}
              components={{
                toolbar: CustomToolbar,
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ItemCitas;
