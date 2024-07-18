import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

// Registrar el idioma español
registerLocale('es', es);

export default function CalendarioDatePicker(){
  const [startDate, setStartDate] = useState(new Date());

   return(
      <div>
          <DatePicker
                className="w-full md:w-[572px] h-[378px] md:h-[450px]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
                calendarClassName="custom-datepicker"
          />
      </div>
   )
}