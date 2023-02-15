import React, { useState, useEffect } from 'react';
import "./Question.css";
import { OPACITY_PERCENTAGE } from "../constants";
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
  const [text, setText] = useState(pregunta?.texto);

  const handleClick = () => {
    setIsActive(false);
    updateQuestion();
  };

  const handleClickConsecuencia = () => {
    setText(pregunta?.concecuencia);
    setTimeout(() => {
      setText(pregunta?.texto);
    }, 3500);
  };
  
  const handleClickRespuesta = () => {
    setText(pregunta?.respuesta);
    setTimeout(() => {
      setText(pregunta?.texto);
    }, 3500);
  };

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        setIsActive(true);
      }, 500); // duración de la animación en milisegundos
    }
  }, [pregunta]);

  return (
    <>
      <div className="black-screen" />
      <div style={{ 
        backgroundColor: pregunta?.categoria?.color?.nombre,
        opacity: isActive ? 1 : OPACITY_PERCENTAGE,
        transition: "opacity 500ms", 
      }} onClick={handleClick}>
        <MenuSuperior 
          BotonMenuPrincipalHandleClick = {BotonMenuPrincipalHandleClick}
          BotonPerfilHandleClick = {BotonPerfilHandleClick}
          BotonAgregarPreguntaHandleClick ={BotonAgregarPreguntaHandleClick}
          currentScreen = {1}
          color={pregunta?.categoria?.color?.nombre}
        />
        <div className="question" >
            {text}
        </div>
        <OpcionesExtras 
          pregunta={pregunta}
          sendConsecuencia={handleClickConsecuencia}
          sendRespuesta={handleClickRespuesta}
        />
        <footer className="footer-style">
          <Likes 
            color={pregunta?.categoria?.color?.nombre} 
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