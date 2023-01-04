import React from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

const App = () => {
  const questions = ['¿Cuál es tu animal favorito?', '¿Cuál es tu comida favorita? ¿Cuál es tu comida favorita? ¿Cuál es tu comida favorita?', '¿Cuál es tu lugar favorito para viajar?'];
  const creators = ['Juan', 'Ana', 'Pedro'];
  const likes = [10, 20, 30];
  const backgroundColors = ['blue', 'green', 'red'];

  return (
    <div>
      <Question
        questions={questions}
        creators={creators}
        likes={likes}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};

export default App;
