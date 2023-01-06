import { Pregunta } from '../models/Pregunta/Pregunta';
import axios from 'axios';

const nuevaPregunta = async () => {
  try {
    const response = await axios.get('http://localhost:8080/pregunta/nuevaPregunta');
    console.log(new Pregunta(response.data));
    return new Pregunta(response.data);
  } catch (error) {
    console.error(error);
  }
}

export {
    nuevaPregunta
}
