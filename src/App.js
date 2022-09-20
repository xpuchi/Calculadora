import "./App.css";
import calculator from "./img/calculadora.gif";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState(""); //  Creamos un estado para la aplicación(App) llamado 'input'. Este input se va a mantener como el estado de este componente. También tenemos una funcion (setInput) para poder actualizar el input. Inicialmente va a ser una cadena vacía (useState(''))

  const agregarInput = (val) => {
    setInput(input + val);
  }; // Funcion que va a actualizar el input. Le pasamos el input que teniamos, concatenado con el nuevo valor que le estamos pasando. Estamos trabajando con cadena de caracteres.

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input)); // Funcion de evaluate, que se consigue importando el paquete de la librería math.js, transforma los caracteres especiales en operador matematico
    } else {
      alert("Por favor ingresa valores para realizar los cálculos");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={calculator} className="logo-contenedor" alt="Logo" />
      </div>

      <div className="calculadora-contenedor">
        <Pantalla input={input} />
        {/* Asignamos el input como el valor de la Pantalla, para que cuando lo actualicemos se actualice su valor. Pasamos el prop input con el valor del estado {input} */}

        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
