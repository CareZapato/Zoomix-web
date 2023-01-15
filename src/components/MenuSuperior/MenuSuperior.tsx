import React, { useState, useEffect } from 'react';
import BotonMenuPrincipal from './BotonMenuPrincipal/BotonMenuPrincipal';
import BotonPerfil from './BotonPerfil/BotonPerfil';
import BotonAgregarPregunta from './BotonAgregarPregunta/BotonAgregarPregunta';
import "./MenuSuperior.css";

type Props = {
    //onClick: () => void;
    BotonMenuPrincipalHandleClick: () => void;
    BotonPerfilHandleClick: () => void;
    BotonAgregarPreguntaHandleClick: () => void;
}

const MenuSuperior = ({ BotonMenuPrincipalHandleClick, BotonPerfilHandleClick, BotonAgregarPreguntaHandleClick }: Props) => {
    

    return (
        <div className="menu-superior">
            <BotonMenuPrincipal 
                onClick={BotonMenuPrincipalHandleClick}
            />
            <BotonAgregarPregunta 
                onClick={BotonAgregarPreguntaHandleClick}
            />
            <BotonPerfil 
                onClick={BotonPerfilHandleClick}
            />
        </div>
    );
};

export default MenuSuperior;