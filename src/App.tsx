
import './App.css';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import { Pregunta } from './models/Pregunta/Pregunta';
import { nuevaPregunta } from './Services/PreguntaServices';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';

const App = () => {
  
  const [pregunta, setPregunta] = useState<Pregunta | null>(null);

  const updateQuestion = async () => {
    const pregunta = await nuevaPregunta();
    if(pregunta){
      setPregunta(pregunta);
    }
  };

  const menuPrincipal = () => {
    console.log("Menu Principal");
  }

  const menuPerfil = () => {
    console.log("menu Perfil");
  }

  useEffect(() => {
    updateQuestion();
  }, []);

  if (!pregunta) {
    return <div>Cargando pregunta...</div>;
  }
  
  return (
    <div>
      { 
      pregunta ? (
        <div>
          <Question
            question={pregunta.texto}
            creator={pregunta.jugador?.nombre}
            likes={pregunta.likes}
            backgroundColor={pregunta.categoria?.color?.nombre}
            updateQuestion={updateQuestion}
            BotonMenuPrincipalHandleClick={menuPrincipal}
            BotonPerfilHandleClick={menuPerfil}
          />
        </div>
      ) : (
        <p>Cargando datos...</p>
      ) }
    </div>
  );
};

export default App;
