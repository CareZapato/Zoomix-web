import React from 'react';
import './BotonPerfil.css';

type Props = {
  onClick: () => void;
}

const BotonPerfil = ({ onClick }: Props) => {
  return (
    <div className="boton-perfil" onClick={onClick}>
      <i className="fas fa-user"></i>
    </div>
  );
};

export default BotonPerfil;