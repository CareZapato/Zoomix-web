import React from 'react';
import './BotonMenuPrincipal.css';

type Props = {
  onClick: () => void;
}

const BotonMenuPrincipal = ({ onClick }: Props) => {
  return (
    <div className="boton-menu-principal" onClick={onClick}>
      <i className="fas fa-home">hola</i>
    </div>
  );
};

export default BotonMenuPrincipal;