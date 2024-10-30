// ValorContexto.js
import React, { createContext, useContext, useState } from 'react';

const ValorContexto = createContext();

export const useValor = () => useContext(ValorContexto);

export const ValorProvider = ({ children }) => {
  const [respCorrectas, setRespCorrectas] = useState(0);
  const [siguientePregunta, setSiguientePregunta] = useState(false);
  const [examenTerminado, setExamenTerminado] = useState(false);

  return (
    <ValorContexto.Provider value={{ respCorrectas, setRespCorrectas, siguientePregunta, setSiguientePregunta, examenTerminado, setExamenTerminado}}>
      {children}
    </ValorContexto.Provider>
  );
};
