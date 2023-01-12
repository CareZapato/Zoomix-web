import React from 'react';
import './BotonMenuPrincipal.css';

type Props = {
  onClick: () => void;
}

const BotonMenuPrincipal = ({ onClick }: Props) => {

  return (
    <button
      className="boton-menu-principal"
      onClick={onClick}
    >
      Menu Principal
    </button>
  );
};

export default BotonMenuPrincipal;