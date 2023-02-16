import React, { useState, useEffect } from 'react';
import "./Question.css";
import { OPACITY_PERCENTAGE, EXTRAS_TIME_SHOW } from "../constants";
import Likes from "./Likes/Likes";
import Autor from "./Autor/Autor";
import MenuSuperior from './MenuSuperior/MenuSuperior';
import { Pregunta } from '../models/Pregunta/Pregunta';
import OpcionesExtras from './OpcionesExtras/OpcionesExtras';

type Props = {
  pregunta?: Pregunta;
  updateQuestion: () => void;
  BotonMenuPrincipalHandleClick: () => void;
  BotonPerfilHandleClick:() => void;
  BotonAgregarPreguntaHandleClick: () => void;
  guardarPregunta: () => void;
};

const Question = (
  { 
    pregunta,
    updateQuestion,
    BotonMenuPrincipalHandleClick,
    BotonPerfilHandleClick,
    BotonAgregarPreguntaHandleClick,
    guardarPregunta
  }
  : Props) => {
  const [isActive, setIsActive] = useState(true);
  const [isActiveText, setIsActiveText] = useState(false);
  const [text, setText] = useState(pregunta?.texto);
  const [color, setColor] = useState(pregunta?.categoria?.color?.nombre);

  const handleClick = () => {
    setIsActive(false);
    updateQuestion();
  };

  const handleClickConsecuencia = () => {
    setText(pregunta?.concecuencia);
    setTimeout(() => {
      setText(pregunta?.texto);
    }, EXTRAS_TIME_SHOW);
  };
  
  const handleClickRespuesta = () => {
    setText(pregunta?.respuesta);
    setTimeout(() => {
      setText(pregunta?.texto);
    }, EXTRAS_TIME_SHOW);
  };

  const handleClickColor = () => {
    setText(pregunta?.explicacionColorOpenAI);
    setColor(pregunta?.colorOpenAI);
    setTimeout(() => {
      setText(pregunta?.texto);
      setColor(pregunta?.categoria?.color?.nombre);
    }, EXTRAS_TIME_SHOW);
  };

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        setText(pregunta?.texto);
        setIsActive(true);
      }, 500); // duración de la animación en milisegundos
    }
  }, [pregunta]);

  return (
    <>
      <div className="black-screen" />
      <div style={{ 
        backgroundColor: color,
        opacity: isActive ? 1 : OPACITY_PERCENTAGE,
        transition: "opacity 500ms", 
      }} onClick={handleClick}>
        <MenuSuperior 
          BotonMenuPrincipalHandleClick = {BotonMenuPrincipalHandleClick}
          BotonPerfilHandleClick = {BotonPerfilHandleClick}
          BotonAgregarPreguntaHandleClick ={BotonAgregarPreguntaHandleClick}
          currentScreen = {1}
          color={color}
        />
        <div className="question">
            {text}
        </div>
        <OpcionesExtras 
          pregunta={pregunta}
          sendConsecuencia={handleClickConsecuencia}
          sendRespuesta={handleClickRespuesta}
          sendColor={handleClickColor}
        />
        <footer className="footer-style">
          <Likes 
            color={color} 
            likes={pregunta?.likes ? pregunta?.likes : undefined} 
            guardarPregunta={guardarPregunta}
          />
          {/* <Autor color={backgroundColor} autor={creator ? creator : undefined} /> */}
        </footer>
      </div>
      </>
  );
};


export default Question;