import React from 'react';
import './BotonMenuPrincipal.css';

type Props = {
  onClick: () => void;
}

const BotonMenuPrincipal = ({ onClick }: Props) => {

  function handleClick(e: { stopPropagation: () => void; }) { 
    e.stopPropagation();
    onClick();
} 

  return (
    <button
      className="boton-menu-principal"
      onClick={handleClick}
    >
      Menu Principal
    </button>
  );
};

export default BotonMenuPrincipal;