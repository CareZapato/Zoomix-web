import React, { useState, useEffect } from 'react';
import BotonMenuPrincipal from './BotonMenuPrincipal/BotonMenuPrincipal';
import BotonPerfil from './BotonPerfil/BotonPerfil';
import BotonAgregarPregunta from './BotonAgregarPregunta/BotonAgregarPregunta';
import "./MenuSuperior.css";

type Props = {
    //onClick: () => void;
    currentScreen: number;
    BotonMenuPrincipalHandleClick: () => void;
    BotonPerfilHandleClick: () => void;
    BotonAgregarPreguntaHandleClick: () => void;
}

const MenuSuperior = ({ 
    BotonMenuPrincipalHandleClick, 
    BotonPerfilHandleClick, 
    BotonAgregarPreguntaHandleClick, 
    currentScreen }: Props
) => {
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