import React, { useState, useEffect } from 'react';
import "./Question.css";
import { CSSTransition } from "react-transition-group";
import { OPACITY_PERCENTAGE } from "../constants";
import Likes from "./Likes/Likes";
import Autor from "./Autor/Autor";

type Props = {
  question: string;
  creator: string;
  likes: number;
  backgroundColor: string;
  updateQuestion: () => void;
};

const Question = ({ question, creator, likes, backgroundColor, updateQuestion }: Props) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
      setTimeout(() => {
        updateQuestion();
      // Aquí se podría realizar una llamada a la función que obtiene la siguiente pregunta
    }, 500); // duración de la animación en milisegundos
  };

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        setIsActive(true);
      }, 500); // duración de la animación en milisegundos
    }
  }, [isActive]);

  return (
    <>
      <div className="black-screen" />
      <div style={{ 
        backgroundColor: backgroundColor,
        opacity: isActive ? 1 : OPACITY_PERCENTAGE,
        transition: "opacity 500ms", 
      }} onClick={handleClick}>
        <div className="question" >
            {question}
        </div>
        <footer>
          <Likes likes={likes} />
          <Autor autor={creator} />
        </footer>
      </div>
      </>
  );
};


export default Question;