import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/es'

dayjs.locale('es')

const CalendarioBigCalendar = () => {
  const localizer = dayjsLocalizer(dayjs);

  const event = [
    {
      start: dayjs("2024-07-16T09:00:00").toDate(),
      end: dayjs("2024-07-16T09:00:00").toDate(),
      title: "Event1",
      data : {
        hora: "9:00",
        paciente: "Olga Ramiriz",
        especialidad:"Medicina general",
      },
    },
    {
      start: dayjs("2024-07-17T11:00:00").toDate(),
      end: dayjs("2024-07-17T11:00:00").toDate(),
      title: "Event2",
      data : {
        hora: "11:00",
        paciente: "Olga Ramiriz",
        especialidad:"Neurología",
      },
    },
 
  ];

  const components = {
    event: (props) => {
      const { data } = props.event;
      console.log(data);

      if (data.especialidad == "Medicina general") {
        return (
          <div style={{ background: '#0EA1E3', opacity: '20px' }} > 
            {data.hora} <br/>
            {data.paciente} <br/>
            {data.especialidad} 
          </div>
        );
      } 
      if (data.especialidad == "Control") {
          return (
            <div style={{ background: '#F59E0B', opacity: '20px' }} > 
              {data.hora} <br/>
              {data.paciente} <br/>
              {data.especialidad} 
            </div>
          );
        
      }
      if (data.especialidad == "Neurología") {
        return (
          <div style={{ background: '#6D28D9', opacity: '20px' }} > 
            {data.hora} <br/>
            {data.paciente} <br/>
            {data.especialidad} 
          </div>
        );
      
      }
      if (event.data.especialidad == "Pediatría") {
        return (
          <div style={{ background: '#F43F5E', opacity: '20px' }} > 
            {data.hora} <br/>
            {data.paciente} <br/>
            {data.especialidad} 
          </div>
        );
      
      }
    },
  };
  
  return (
    <>
      <Calendar
        localizer={localizer}
        events={event}
        //views={["month","day"]} filtra por mes-dia-agenda
        defaultView="day" //inicia por defecto el dia
        min={dayjs('2024-12-23T8:00:00').toDate()} //Horario minimo
        max={dayjs('2024-12-23T22:30:00').toDate()} //Horario maximo
        formats={{
          dayHeaderFormat: date => {
            return dayjs(date).format("DD/MM/YYYY") // el dia muestra la fecha en este formato
          }
        }}
        //components={components}
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