import React, { useState, useEffect } from 'react';
import BotonMenuPrincipal from './BotonMenuPrincipal/BotonMenuPrincipal';
import BotonPerfil from './BotonPerfil/BotonPerfil';
import "./MenuSuperior.css";

type Props = {
    //onClick: () => void;
    BotonMenuPrincipalHandleClick: () => void;
    BotonPerfilHandleClick: () => void;
}

const MenuSuperior = ({ BotonMenuPrincipalHandleClick, BotonPerfilHandleClick }: Props) => {
    

    return (
        <div className="menu-superior">
            <BotonMenuPrincipal 
                onClick={BotonMenuPrincipalHandleClick}
            />
            <BotonPerfil 
                onClick={BotonPerfilHandleClick}
            />
        </div>
    );
};

export default MenuSuperior;