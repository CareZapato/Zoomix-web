import { Pregunta } from '../models/Pregunta/Pregunta';
import axios, { AxiosResponse } from 'axios';
import { urlBase } from '../const';

const nuevaPregunta = async () => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/pregunta/nuevaPregunta');
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const nuevaPreguntaOpenAI = async () => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/openai/askOpenAICategoria');
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const nuevaPreguntaCategoria = async (categoria: number) => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/pregunta/nuevaPregunta/'+categoria);
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function agregarPregunta(pregunta:Pregunta){
  try {
    const response = await fetch(
      urlBase+'/categoria/categorias',
      {method: 'POST',
      body: JSON.stringify(pregunta)
    });
    const data = await response.json();
    return data as Pregunta;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export {
    nuevaPregunta,
    agregarPregunta,
    nuevaPreguntaCategoria,
    nuevaPreguntaOpenAI
}
