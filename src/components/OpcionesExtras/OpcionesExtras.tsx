import React, { useState, useEffect, useRef  } from 'react';
import { Pregunta } from '../../models/Pregunta/Pregunta';
import './OpcionesExtras.css';

type Props = {
  pregunta?: Pregunta;
  sendConsecuencia: () => void;
  sendRespuesta: () => void;
};

const OpcionesExtras = (
    {
      pregunta,
      sendConsecuencia,
      sendRespuesta
    } : Props) => {

  const handleClickConsecuencia = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    sendConsecuencia();
  };
      
  const handleClickRespuesta = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    sendRespuesta();
  };

  return (
    <>
      <div className="floating-objects">
        {
          pregunta?.concecuencia ? 
          <div
            onClick={handleClickConsecuencia}
            className="object">
            Consecuencia
          </div> : null
        }
        {
          pregunta?.respuesta &&
          pregunta?.respuesta !== "*" ? 
          <div
            onClick={handleClickRespuesta}
            className="object">
            Respuesta
          </div> : null
        }
        
      </div>
    </>
  )
};

export default OpcionesExtras;