import './App.css';
import logo from './imagenes/sapito.png'
import Boton from './components/Boton.js';

function App() {
  const playAudio = val => {
    let resultado;
    switch(val) {
      case 'A':
        resultado = require('./audio/audio-a.mp3');
        break;
      case 'B':
        resultado = require('./audio/audio-b.m4a');
        break;
      case 'C':
        resultado = require('./audio/audio-c.m4a');
        break;
      case 'D':
        resultado = require('./audio/audio-d.m4a');
        break;
      case 'E':
        resultado = require('./audio/audio-e.m4a');
        break;
      case 'F':
        resultado = require('./audio/audio-f.m4a');
        break;
      case 'G':
        resultado = require('./audio/audio-g.m4a');
        break;
      case 'H':
        resultado = require('./audio/audio-h.m4a');
        break;
      case 'I':
        resultado = require('./audio/audio-i.m4a');
        break;
      case 'J':
        resultado = require('./audio/audio-j.m4a');
        break;
      case 'K':
        resultado = require('./audio/audio-k.m4a');
        break;
      case 'L':
        resultado = require('./audio/audio-l.m4a');
        break;
      case 'M':
        resultado =require('./audio/audio-m.m4a');
        break;
      case 'N':
        resultado = require('./audio/audio-n.m4a');
        break;
      case 'O':
        resultado = require('./audio/audio-o.m4a');
        break;
      case 'P':
        resultado = require('./audio/audio-p.m4a');
        break;
      case 'Q':
        resultado = require('./audio/audio-q.m4a');
        break;
      case 'R':
        resultado = require('./audio/audio-r.m4a');
        break;
      case 'S':
        resultado = require('./audio/audio-s.m4a');
        break;
      case 'T':
        resultado = require('./audio/audio-t.m4a');
        break;
      case 'U':
        resultado = require('./audio/audio-u.m4a');
        break;
      case 'V':
        resultado = require('./audio/audio-v.m4a');
        break;
      case 'W':
        resultado = require('./audio/audio-w.m4a');
        break;
      case 'X':
        resultado = require('./audio/audio-x.m4a');
        break;
      case 'Y':
        resultado = require('./audio/audio-y.m4a');
        break;
      case 'Z':
        resultado = require('./audio/audio-z.m4a');
        break;
      default:
        resultado = require('./audio/audio-a.mp3');
        break;
    }
    const audioRep =  new Audio(resultado);
    //audioRep.volume = 0.4;
    audioRep.play();
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}     // nos referimos a un objeto
          className='logo'
          alt='Logo de app' />
      </div>
      <div className='contenedor-ranafonica'>
        <div className='fila'>
          <Boton manejarClick={playAudio}>A</Boton>
          <Boton manejarClick={playAudio}>B</Boton>
          <Boton manejarClick={playAudio}>C</Boton>
          <Boton manejarClick={playAudio}>D</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={playAudio}>E</Boton>
          <Boton manejarClick={playAudio}>F</Boton>
          <Boton manejarClick={playAudio}>G</Boton>
          <Boton manejarClick={playAudio}>H</Boton>
          <Boton manejarClick={playAudio}>I</Boton>
          <Boton manejarClick={playAudio}>J</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={playAudio}>K</Boton>
          <Boton manejarClick={playAudio}>L</Boton>
          <Boton manejarClick={playAudio}>M</Boton>
          <Boton manejarClick={playAudio}>N</Boton>
          <Boton manejarClick={playAudio}>O</Boton>
          <Boton manejarClick={playAudio}>P</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={playAudio}>Q</Boton>
          <Boton manejarClick={playAudio}>R</Boton>
          <Boton manejarClick={playAudio}>S</Boton>
          <Boton manejarClick={playAudio}>T</Boton>
          <Boton manejarClick={playAudio}>U</Boton>
          <Boton manejarClick={playAudio}>V</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={playAudio}>W</Boton>
          <Boton manejarClick={playAudio}>X</Boton>
          <Boton manejarClick={playAudio}>Y</Boton>
          <Boton manejarClick={playAudio}>Z</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
