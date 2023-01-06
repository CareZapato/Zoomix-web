
import './App.css';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import { Pregunta } from './models/Pregunta/Pregunta';
import { nuevaPregunta } from './Services/PreguntaServices';

const ExampleComponent = () => {
  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  
  useEffect(() => {
    const fetchNewQuestion = async () => {
      const data = await nuevaPregunta();
      setPregunta(data);
    };

    fetchNewQuestion();
  }, []);

  if (!pregunta) {
    return <div>Cargando pregunta...</div>;
  }
  
  return (
    <div>
      { pregunta ? (
        <div>
          <Question
            questions={pregunta.texto}
            creators={pregunta.jugador.nombre}
            likes={pregunta.likes}
            backgroundColors={pregunta.categoria.color.nombre}
          />
        </div>
      ) : (
        <p>Cargando datos...</p>
      ) }
    </div>
  );
};

export default App;
