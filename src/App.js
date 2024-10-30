import Carrusel from './componentes/carrusel/carrusel';
import './App.css';
import './global.css';
import { ValorProvider } from './valorContexto';

import Temporizador from './componentes/temporizador/temporizador';
function App() {
  return (
    <ValorProvider>
    <div className="App">
      <div className='temporizador'>
      <Temporizador/>
      </div>
      <div className='carrusel'>
        <Carrusel />
      </div>
      <div className='resultados'>
      </div>
    </div>
    </ValorProvider>
  );
}

export default App;