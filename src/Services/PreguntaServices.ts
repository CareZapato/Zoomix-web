import { Pregunta } from '../models/Pregunta/Pregunta';
import axios, { AxiosResponse } from 'axios';

const nuevaPregunta = async () => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get('http://localhost:8080/pregunta/nuevaPregunta');
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

const agregarPregunta = async (pregunta: Pregunta) => {
  try {
    const response: AxiosResponse<Pregunta> = await axios.get('http://localhost:8080/pregunta/nuevaPregunta');
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

export {
    nuevaPregunta,
    agregarPregunta
}
