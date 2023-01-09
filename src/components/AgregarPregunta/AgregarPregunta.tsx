import React, { useState } from 'react';
import './AgregarPregunta.css';
import { agregarPregunta } from '../../Services/PreguntaServices';
import { Pregunta } from '../../models/Pregunta/Pregunta';
import { Categoria } from '../../models/Categoria/Categoria';

interface Props {
  onAgregarPregunta: () => void;
}

const AgregarPregunta: React.FC<Props> = ({ onAgregarPregunta }) => {
  const [texto, setTexto] = useState('');
  const [categoriaId, setCategoriaId] = useState(1);
  const [jugadorId, setJugadorId] = useState(1);

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
      onAgregarPregunta();
    });
  };

  return (
    <form className="agregar-pregunta" onSubmit={handleSubmit}>
      <h1>Agregar Pregunta</h1>
      <label htmlFor="texto">Texto</label>
      <input
        type="text"
        id="texto"
        maxLength={100}
        value={texto}
        onChange={handleTextoChange}
      />
      <label htmlFor="categoriaId">Categoría</label>
      <select id="categoriaId" value={categoriaId} onChange={handleCategoriaIdChange}>
        <option value={1}>Conocer</option>
        <option value={2}>Diversión</option>
        <option value={3}>Otros</option>
      </select>
    </form>
  );
}

export default AgregarPregunta;