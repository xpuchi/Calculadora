import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div> // Si este valor no va a cambiar, como en este caso, se puede poner directamente CLEAR en el compónente en vez de props.children y CLEAR en el boton
);

export default BotonClear;
