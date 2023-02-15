import React from 'react';
import './BotonMenuPrincipal.css';

import home from "../../../img/home.png"

type Props = {
  onClick: () => void;
  color?: string;
}

const BotonMenuPrincipal = ({ onClick, color }: Props) => {

  function handleClick(e: { stopPropagation: () => void; }) { 
    e.stopPropagation();
    onClick();
} 
const filter = "opacity(0.99) drop-shadow(0 0 0 white) brightness(100)";
  return (
    <button
      className="boton-menu-principal"
      onClick={handleClick}
    >
      <img src={home} />
    </button>
  );
};

export default BotonMenuPrincipal;