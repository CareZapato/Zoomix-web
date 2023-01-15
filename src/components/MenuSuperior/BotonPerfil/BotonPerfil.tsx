import React from 'react';
import './BotonPerfil.css';

type Props = {
  onClick: () => void;
}

const BotonPerfil = ({ onClick }: Props) => {

  function handleClick(e: { stopPropagation: () => void; }) { 
      e.stopPropagation();
      onClick();
  } 

  return (
    <button
      className="boton-perfil"
      onClick={handleClick}
    >
      Perfil
    </button>
  );
};

export default BotonPerfil;