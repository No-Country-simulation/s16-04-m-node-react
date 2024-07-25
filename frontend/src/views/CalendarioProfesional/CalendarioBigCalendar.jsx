import React, { useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/es';
import { useAppDispatch, useAppSelector } from "../../hooks/useAppselector";
import { listCitas } from "../../store/slice/citasSlice";

dayjs.locale('es');

const CalendarioBigCalendar = () => {
  const localizer = dayjsLocalizer(dayjs);
  const dataCitas = useAppSelector((state) => state.citas.citaData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listCitas());
  }, [dispatch]);

  const events = dataCitas.map(cita => ({
    start: dayjs(`${cita.date}T${cita.time}`).toDate(),
    end: dayjs(`${cita.date}T${cita.time}`).add(1, 'hour').toDate(), 
    title: `${cita.pacienteone.name} ${cita.pacienteone.surname}`,
    data: {
      hora: dayjs(`${cita.date}T${cita.time}`).format('HH:mm'),
      paciente: `${cita.pacienteone.name} ${cita.pacienteone.surname}`,
      especialidad: cita.reason,
      profilePicture: cita.pacienteone.user.profilePicture,
    },
  }));

  const components = {
    event: (props) => {
      const { data } = props.event;
      console.log(data);

      let backgroundColor = '#0EA1E3'; // Default color
      if (data.especialidad === "Control") backgroundColor = '#F59E0B';
      if (data.especialidad === "Neurología") backgroundColor = '#6D28D9';
      if (data.especialidad === "Pediatría") backgroundColor = '#F43F5E';

      return (
        <div style={{ background: backgroundColor, opacity: '0.8' }}>
          {data.hora} <br/>
          {data.paciente} <br/>
          {data.especialidad} <br/>
          <img src={data.profilePicture} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
        </div>
      );
    },
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="day"
        min={dayjs('2024-12-23T8:00:00').toDate()}
        max={dayjs('2024-12-23T22:30:00').toDate()}
        formats={{
          dayHeaderFormat: date => dayjs(date).format("DD/MM/YYYY")
        }}
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "Sin eventos",
        }}
        components={components}
      />
    </>
  );
};

export default CalendarioBigCalendar;
