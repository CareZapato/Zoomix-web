import React, { useState, useEffect } from 'react';
import "./Question.css";
import { CSSTransition } from "react-transition-group";
import { OPACITY_PERCENTAGE } from "../constants";
import Likes from "./Likes/Likes";
import Autor from "./Autor/Autor";

type Props = {
  questions: string[];
  creators: string[];
  likes: number[];
  backgroundColors: string[];
};

const Question = ({ questions, creators, likes, backgroundColors }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
      setTimeout(() => {
      setCurrentQuestion((currentQuestion + 1) % questions.length);
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
        backgroundColor: backgroundColors[currentQuestion],
        opacity: isActive ? 1 : OPACITY_PERCENTAGE,
        transition: "opacity 500ms", 
      }} onClick={handleClick}>
        <div className="question" >
            {questions[currentQuestion]}
        </div>
        <footer>
          <Likes likes={likes[currentQuestion]} />
          <Autor autor={creators[currentQuestion]} />
        </footer>
      </div>
      </>
  );
};

export default Question;