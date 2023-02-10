import React from 'react';
import './BotonMenuPrincipal.css';

type Props = {
  onClick: () => void;
  color?: string;
}

const BotonMenuPrincipal = ({ onClick, color }: Props) => {

  function handleClick(e: { stopPropagation: () => void; }) { 
    e.stopPropagation();
    onClick();
} 

  return (
    <button
      className="boton-menu-principal"
      style= {{
        color : color,
        border: '1px solid rgba(0,255,0,0.3)'
      }}
      onClick={handleClick}
    >
      Menu Principal
    </button>
  );
};

export default BotonMenuPrincipal;