import React, { useState, useEffect } from 'react';
import './AgregarPregunta.css';
import { agregarPregunta } from '../../Services/PreguntaServices';
import { getListaCategorias } from '../../Services/CategoriaServices';
import { Pregunta } from '../../models/Pregunta/Pregunta';
import { Categoria } from '../../models/Categoria/Categoria';
import MenuSuperior from '../MenuSuperior/MenuSuperior';

interface Props {
  BotonMenuPrincipalHandleClick: () => void;
  BotonPerfilHandleClick:() => void;
  BotonAgregarPreguntaHandleClick: () => void;
}

const AgregarPregunta: React.FC<Props> = ({ 
  BotonMenuPrincipalHandleClick,
  BotonPerfilHandleClick,
  BotonAgregarPreguntaHandleClick 
}) => {
  const [texto, setTexto] = useState('');
  const [categoriaId, setCategoriaId] = useState(1);
  const [jugadorId, setJugadorId] = useState(1);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const fetchCategorias = async () => {
    const data = await getListaCategorias();
    if(data){
      setCategorias(data);
    }
  };

  useEffect(() => {
    if(categorias.length == 0){
      fetchCategorias();
    }
  }, [categorias]);  

  const handleTextoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };

  const handleCategoriaIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaId(parseInt(event.target.value));
  };

  const handleJugadorIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJugadorId(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const json:Pregunta = {
      texto,
      likes: 0,
      activado: true,
      categoria: {
        categoriaId
      },
      jugador: {
        jugadorId,
      },
    };
    agregarPregunta(json).then(() => {
      // onAgregarPregunta();
    });
  };

  return (
    <>
    <div className="container">
      <MenuSuperior 
        BotonMenuPrincipalHandleClick = {BotonMenuPrincipalHandleClick}
        BotonPerfilHandleClick = {BotonPerfilHandleClick}
        BotonAgregarPreguntaHandleClick ={BotonAgregarPreguntaHandleClick}
        currentScreen = {2}
      />
      <form className="agregar-pregunta form-container" onSubmit={handleSubmit}>
        <h1>Agregar Pregunta</h1>
        <label htmlFor="texto">Texto</label>
        <textarea
          id="texto"
          rows={2}
          maxLength={100}
          value={texto}
        />
        <label htmlFor="categoriaId">Categoría</label>
        <select id="categoriaId" value={categoriaId} onChange={handleCategoriaIdChange}>
          {categorias.map((categoria) => {
            return <option key={categoria.categoriaId} value={categoria.categoriaId}>{categoria.nombre}</option>
          })}
        </select>
        <button className="submit-button" type="submit">Enviar</button>
      </form>
      </div>
    </>
  );
}

export default AgregarPregunta;