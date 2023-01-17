
import './App.css';
import Question from './components/Question';
import { useState, useEffect } from 'react';
import { Pregunta } from './models/Pregunta/Pregunta';
import { nuevaPregunta } from './Services/PreguntaServices';
import AgregarPregunta from './components/AgregarPregunta/AgregarPregunta';
import PantallaPrincipal from './components/PantallaPrincipal/PantallaPrincipal';

const App = () => {
  
  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  const [pantalla, setPantalla] = useState(1);


  const updateQuestion = async () => {
    const pregunta = await nuevaPregunta();
    if(pregunta){
      setPregunta(pregunta);
    }
  };

  const menuPrincipal = () => {
    console.log("Menu Principal");
    setPantalla(3);
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
    console.log("handleCategoriaSel: ",cat);
    return 1;
  }


  useEffect(() => {
    console.log("pantalla:",pantalla);
    if(pantalla){
      updateQuestion();
    }else{
      console.log("cambiar Pantalla");
    }
  }, [pantalla]);


  if (!pregunta) {
    return <div>Cargando pregunta...</div>;
  }else{
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
        return (
          <div>
            <Question
              question={pregunta.texto}
              creator={pregunta.jugador?.nombre}
              likes={pregunta.likes}
              backgroundColor={pregunta.categoria?.color?.nombre}
              updateQuestion={updateQuestion}
              BotonMenuPrincipalHandleClick={menuPrincipal}
              BotonPerfilHandleClick={menuPerfil}
              BotonAgregarPreguntaHandleClick={agregarPregunta}
            />
          </div>
        ); 
      case 3:
        return (
          <div>
            Menú Principal ... 
          </div>
        );
      case 4:
        return (
          <div>
            Perfil ... 
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
