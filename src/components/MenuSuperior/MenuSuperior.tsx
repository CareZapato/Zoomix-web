import React from 'react';
import BotonMenuPrincipal from './BotonMenuPrincipal/BotonMenuPrincipal';
import BotonPerfil from './BotonPerfil/BotonPerfil';
import "./MenuSuperior.css";
const MenuSuperior = () => {

    const BotonMenuPrincipalHandleClick = () => {
        console.log("BotonMenuPrincipalHandleClick");
    }

    const BotonPerfilHandleClick = () => {
        console.log("BotonPerfilHandleClick");
    }

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