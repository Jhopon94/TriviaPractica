import React, { useEffect, useState } from 'react';
import './temporizador.css';

const Temporizador = () => {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [activo, setActivo] = useState(true); // Estado para controlar si el temporizador está activo o en pausa

  useEffect(() => {
    let intervalo = null;

    if (activo) {
      intervalo = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            alert("¡Tiempo alcanzado! Respuesta no registrada."); // Alerta cuando el tiempo se acaba
            setActivo(false); // Pausar el temporizador
            return 0; // Reinicia segundos a 0 después de 59
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalo); // Detiene el intervalo si está en pausa
    }

    return () => clearInterval(intervalo);
  }, [activo, seconds]);

  const handleNextQuestion = () => {
    setSeconds(0); // Reinicia los segundos
    setMinute(0);  // Reinicia los minutos
    setActivo(true); // Reactiva el temporizador para la siguiente pregunta
  };

  return (
    <div className='tiempo'>
      <div className='container'>
        <div className='container-time'>
          <h3>Tiempo</h3>
          <h4>{minute}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
        </div>
        <div className='botones'>
          <button onClick={handleNextQuestion}>Siguiente Pregunta</button>
        </div>
      </div>
    </div>
  );
};

export default Temporizador;
