import React, { useState } from 'react';
import './tablero.css'; 

const App = () => {
  // Estado para las respuestas
  const [respuestas, setRespuestas] = useState([]);
 
   
  // Función para marcar una respuesta como correcta o incorrecta
  const marcarRespuesta = (index, esCorrecta) => {
    const nuevasRespuestas = respuestas.map((respuesta, i) =>
      i === index ? { ...respuesta, correcta: esCorrecta } : respuesta
    );
    setRespuestas(nuevasRespuestas);
  };

  // Constante para reiniciar las respuestas
  const reiniciarRespuestas = () => {
    setRespuestas([]);
  };

  // Calcular el total de correctas e incorrectas
  const totalCorrectas = respuestas.filter((respuesta) => respuesta.correcta === true).length;
  const totalIncorrectas = respuestas.filter((respuesta) => respuesta.correcta === false).length;

  return (
    <div className="tablero">
      <h1>Tablero de Respuestas</h1>
      <div className="input-container">
        <button onClick={reiniciarRespuestas} className="reiniciar">Reiniciar Preguntas</button>
      </div>
      <ul className="lista-respuestas">
        {respuestas.map((respuesta, index) => (
          <li key={index} className={`respuesta ${respuesta.correcta === true ? 'correcta' : respuesta.correcta === false ? 'incorrecta' : ''}`}>
            {respuesta.texto}
            <div className="botones">
              <button onClick={() => marcarRespuesta(index, true)} className="correcto">Correcta</button>
              <button onClick={() => marcarRespuesta(index, false)} className="incorrecto">Incorrecta</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="resumen">
        <h2>Resumen</h2>
        <p>Respuestas correctas: {totalCorrectas}</p>
        <p>Respuestas incorrectas: {totalIncorrectas}</p>
      </div>
    </div>
  );
};

export default App;