import { Pregunta } from '../models/Pregunta/Pregunta';
import axios, { AxiosResponse } from 'axios';
import { urlBase } from '../const';

const nuevaPregunta = async () => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/pregunta/nuevaPregunta');
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const nuevaPreguntaOpenAI = async () => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/openai/askOpenAICategoria');
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const nuevaPreguntaOpenAICategoria = async (categoria: number) => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/openai/askOpenAICategoria/'+categoria);
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const nuevaPreguntaCategoria = async (categoria: number) => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get(urlBase+'/pregunta/nuevaPregunta/'+categoria);
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

const guardarPregunta = async (pregunta: Pregunta) => {
  try {
    console.log(JSON.stringify(pregunta));
    const response = await fetch(
      urlBase+'/pregunta/insertarPregunta',
      {method: 'POST',
      body: JSON.stringify(pregunta),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log("response: ",response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export {
    nuevaPregunta,
    agregarPregunta,
    nuevaPreguntaCategoria,
    nuevaPreguntaOpenAI,
    nuevaPreguntaOpenAICategoria,
    guardarPregunta
}
