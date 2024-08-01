import  { useState, useEffect } from 'react';

function FechaActual() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{date.toLocaleDateString()}</div>;
}

export default FechaActual;