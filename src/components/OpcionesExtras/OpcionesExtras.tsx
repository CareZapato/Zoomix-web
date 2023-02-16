import React, { useState, useEffect, useRef  } from 'react';
import { Pregunta } from '../../models/Pregunta/Pregunta';
import './OpcionesExtras.css';

type Props = {
  pregunta?: Pregunta;
  sendConsecuencia: () => void;
  sendRespuesta: () => void;
  sendColor: () => void;
};

const OpcionesExtras = (
    {
      pregunta,
      sendConsecuencia,
      sendRespuesta,
      sendColor
    } : Props) => {

  const handleClickConsecuencia = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    sendConsecuencia();
  };
      
  const handleClickRespuesta = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    sendRespuesta();
  };

  const handleClickColor = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    sendColor();
  };

  return (
    <>
      <div className="floating-objects">
        {
          pregunta?.concecuencia &&
          pregunta?.concecuencia.trim() !== "*" &&
          pregunta?.concecuencia.trim() !== "✨"  ? 
          <div
            onClick={handleClickConsecuencia}
            className="object">
            Consecuencia
          </div> : null
        }
        {
          pregunta?.respuesta &&
          pregunta?.respuesta.trim() !== "*" &&
          pregunta?.respuesta.trim() !== "✨"  ? 
          <div
            onClick={handleClickRespuesta}
            className="object">
            Respuesta
          </div> : null
        }
        {
          pregunta?.colorOpenAI &&
          pregunta?.colorOpenAI.trim() !== "*" &&
          pregunta?.colorOpenAI.trim() !== "✨"  ?
          <div
            onClick={handleClickColor}
            className="object">
            Color
          </div> : null
        }
        
      </div>
    </>
  )
};

export default OpcionesExtras;