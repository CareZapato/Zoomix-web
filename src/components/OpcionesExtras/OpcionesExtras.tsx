import React, { useState, useEffect, useRef  } from 'react';
import { Pregunta } from '../../models/Pregunta/Pregunta';
import './OpcionesExtras.css';
import {EXTRAS_TIME_SHOW} from "../../constants"

import button_skull_animated from "../../img/button_skull_animated.gif";
import button_skull from "../../img/button_skull.png";
import button_paint_animated from "../../img/button_paint_animated.gif";
import button_paint from "../../img/button_paint.png";
import button_question_animated from "../../img/button_question_animated.gif";
import button_question from "../../img/button_question.png";


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

  const [isShownConsecuencia, setIsShownConsecuencia] = useState(false);
  const [isShownRespuesta, setIsShownRespuesta] = useState(false);
  const [isShownPaint, setIsShownPaint] = useState(false);

  const handleClickConsecuencia = (e: { stopPropagation: () => void; }) => {
    setIsShownConsecuencia(true);
    setTimeout(() => {
      setIsShownConsecuencia(false);
    }, EXTRAS_TIME_SHOW);
    e.stopPropagation();
    sendConsecuencia();
    
  };
      
  const handleClickRespuesta = (e: { stopPropagation: () => void; }) => {
    setIsShownRespuesta(true);
    setTimeout(() => {
      setIsShownRespuesta(false);
    }, EXTRAS_TIME_SHOW);
    e.stopPropagation();
    sendRespuesta();
  };

  const handleClickColor = (e: { stopPropagation: () => void; }) => {
    setIsShownPaint(true);
    setTimeout(() => {
      setIsShownPaint(false);
    }, EXTRAS_TIME_SHOW);
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
            className="object"
           >
            {!isShownConsecuencia ? 
            <img className="" src={button_skull} /> :
            (
              <div>
                <img className="object_selected" src={button_skull_animated} />
              </div>
            )}
          </div> : null
        }
        {
          pregunta?.respuesta &&
          pregunta?.respuesta.trim() !== "*" &&
          pregunta?.respuesta.trim() !== "✨"  ? 
          <div
            onClick={handleClickRespuesta}
            className="object">
            {!isShownRespuesta ? 
            <img className="" src={button_question} /> :
            (
              <div>
                <img className="object_selected" src={button_question_animated} />
              </div>
            )}
          </div> : null
        }
        {
          pregunta?.colorOpenAI &&
          pregunta?.colorOpenAI.trim() !== "*" &&
          pregunta?.colorOpenAI.trim() !== "✨"  ?
          <div
            onClick={handleClickColor}
            className="object">
            {!isShownPaint ? 
            <img className="" src={button_paint} /> :
            (
              <div>
                <img className="object_selected" src={button_paint_animated} />
              </div>
            )}
          </div> : null
        }
        
      </div>
    </>
  )
};

export default OpcionesExtras;