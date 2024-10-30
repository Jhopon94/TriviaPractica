import logo from './logo.svg';
import './App.css';
import './global.css';

import Temporizador from './componentes/temporizador/temporizador';
function App() {
  return (
    <div className="App">
      <div className='carrusel'>
        <div className='temporizador'>
          <Temporizador/>
        </div>
      </div>
      <div className='resultados'>
      </div>
    </div>
  );
}

export default App;