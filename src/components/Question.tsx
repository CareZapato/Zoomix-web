import React, { useState, useEffect } from 'react';
import "./Question.css";
import { OPACITY_PERCENTAGE } from "../constants";
import Likes from "./Likes/Likes";
import Autor from "./Autor/Autor";
import MenuSuperior from './MenuSuperior/MenuSuperior';

type Props = {
  question?: string;
  creator?: string;
  likes?: number;
  backgroundColor?: string;
  updateQuestion: () => void;
  BotonMenuPrincipalHandleClick: () => void;
  BotonPerfilHandleClick:() => void;
  BotonAgregarPreguntaHandleClick: () => void;
};

const Question = (
  { question, 
    creator, 
    likes, 
    backgroundColor, 
    updateQuestion,
    BotonMenuPrincipalHandleClick,
    BotonPerfilHandleClick,
    BotonAgregarPreguntaHandleClick
  }
  : Props) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
    updateQuestion();
  };

  useEffect(() => {
    console.log("questionEnter:",question);
    if (!isActive) {
      setTimeout(() => {
        setIsActive(true);
      }, 500); // duración de la animación en milisegundos
    }
  }, [question]);

  return (
    <>
      <div className="black-screen" />
      <div style={{ 
        backgroundColor: backgroundColor,
        opacity: isActive ? 1 : OPACITY_PERCENTAGE,
        transition: "opacity 500ms", 
      }} onClick={handleClick}>
        <MenuSuperior 
          BotonMenuPrincipalHandleClick = {BotonMenuPrincipalHandleClick}
          BotonPerfilHandleClick = {BotonPerfilHandleClick}
          BotonAgregarPreguntaHandleClick ={BotonAgregarPreguntaHandleClick}
          currentScreen = {1}
          color={backgroundColor}
        />
        <div className="question" >
            {question}
        </div>
        <footer>
          <Likes color={backgroundColor} likes={likes ? likes : undefined} />
          <Autor color={backgroundColor} autor={creator ? creator : undefined} />
        </footer>
      </div>
      </>
  );
};


export default Question;