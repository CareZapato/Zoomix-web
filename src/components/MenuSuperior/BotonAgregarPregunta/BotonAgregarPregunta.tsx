import React from 'react';
import './BotonAgregarPregunta.css';

type Props = {
  onClick: () => void;
}

const BotonAgregarPregunta = ({ onClick }: Props) => {

  function handleClick(e: { stopPropagation: () => void; }) { 
    e.stopPropagation();
    onClick();
} 

  return (
    <button
      className="boton-agregar-pregunta"
      onClick={handleClick}
    >
      Agregar Pregunta
    </button>
  );
};

export default BotonAgregarPregunta;