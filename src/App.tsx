
import './App.css';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import { Pregunta } from './models/Pregunta/Pregunta';
import { nuevaPreguntaCategoria, guardarPregunta, nuevaPreguntaOpenAICategoria } from './Services/PreguntaServices';
import AgregarPregunta from './components/AgregarPregunta/AgregarPregunta';
import PantallaPrincipal from './components/PantallaPrincipal/PantallaPrincipal';
import Perfil from './components/Perfil/Perfil';
import { getConfig } from './Services/ConfigServices';

const App = () => {
  
  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  const [pantalla, setPantalla] = useState(1);
  const [categoria, setCategoria] = useState(0);

  const menuPrincipal = () => {
    console.log("Menu Principal");
    setPregunta(null);
    setPantalla(1);
  }

  const menuPerfil = () => {
    console.log("menu Perfil");
    setPantalla(4);
  }

  const agregarPregunta = () => {
    console.log("Agregar Pregunta");
    setPantalla(5);
  }

  const handleCategoriaSel = (cat:number) => {
    setPregunta(null);
    setCategoria(cat);
    setPantalla(2);
  }

  useEffect(() => {
    if(pantalla == 2 && pregunta == null){
      updateQuestion();
      setPantalla(2);
    }
  }, [pantalla]);

  useEffect(() => {
  }, [pregunta]);

  const updateQuestion = async () => {
    let preguntaNueva;
    if(categoria != 0){
      const rate = await getOPENAI_QUESTION_RATE();
      const value = (Math.random());
      if(rate){
        if(value < Number.parseFloat(rate)){
          preguntaNueva = await nuevaPreguntaOpenAICategoria(categoria);
        }else{
          preguntaNueva = await nuevaPreguntaCategoria(categoria);
        }
      }
    }
    if(preguntaNueva){
      setPregunta(preguntaNueva);
    }
  };

  const getOPENAI_QUESTION_RATE = async () => {
    const openai_question_rate = await getConfig("OPENAI_QUESTION_RATE");
    return openai_question_rate;
  };

  const saveQuestion = async () => {
    console.log("saveQuestion");
    if(pregunta){
      const resp = await guardarPregunta(pregunta);
    }
  };
  
  if(!pantalla){
    return (<div>Espere por favor ...</div>)
  }
  else{
    switch (pantalla) {
        case 1:
          return (
            <div>
              <PantallaPrincipal
                categoriaSel={handleCategoriaSel}
              />
            </div>
          ); 
        case 2:
          if (!pregunta) {
            return <div>Cargando pregunta...</div>;
          }else{
          return (
            <div>
              <Question
                pregunta={pregunta}
                updateQuestion={updateQuestion}
                BotonMenuPrincipalHandleClick={menuPrincipal}
                BotonPerfilHandleClick={menuPerfil}
                BotonAgregarPreguntaHandleClick={agregarPregunta}
                guardarPregunta={saveQuestion}
              />
            </div>
          ); 
        }
          
        case 3:
          return (
            <div>
              Menú Principal ... 
            </div>
          );
        case 4:
          return (
            <div>
              <Perfil
                  userName="John Doe"
                  userImage="https://example.com/user-image.jpg"
                  userQuestions={10}
                  userLikes={50}
              />
            </div>
          );
        case 5:
          return (
            <div>
              <AgregarPregunta
                BotonMenuPrincipalHandleClick={menuPrincipal}
                BotonPerfilHandleClick={menuPerfil}
                BotonAgregarPreguntaHandleClick={agregarPregunta}
              />
            </div>
          );
        default:
          return <div> Cargando pantalla ... </div>
    }
  }
};

export default App;
