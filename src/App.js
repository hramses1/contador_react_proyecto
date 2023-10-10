
import './App.css';
import softDevCore from './img/logo.png'
import {  Boton } from './component/Boton';
import {  Contador } from './component/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics]= useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reinciarContador =() => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={softDevCore}
        alt='logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics} />
        
        
        <Boton
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        
        <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reinciarContador}/>
      </div>
    </div>
  );
}

export default App;
