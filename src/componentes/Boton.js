import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  // Si NO es un número Y tampoco es un punto Y si tampoco es el signo =, entonces lo consideramos como un Operador.

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`}
      onClick={() => props.manejarClick(props.children)}
    >
      {/* la funcion 'esOperador' toma el valor de props.children, y dependiendo de ese valor vamos a asignarle la clase 'operador' o ninguna clase. */}

      {/* Agregamos el eventListener, para que cuando ocurra un click, se va a llamar a una función nueva que estamos creando que es anónima, no se está definiendo más arriba. No toma ningún parametro, retorna el resultado de llamar a la funcion props.manejarClick(props.children). */}

      {props.children}
    </div>
  );
}

export default Boton;
