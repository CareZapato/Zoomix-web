import React from 'react';
import './BotonPerfil.css';

type Props = {
  onClick: () => void;
}

const BotonPerfil = ({ onClick }: Props) => {
  return (
    <button
      className="boton-perfil"
      onClick={onClick}
    >
      Perfil
    </button>
  );
};

export default BotonPerfil;