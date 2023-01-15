import axios, { AxiosResponse } from 'axios';
import { Categoria } from '../models/Categoria/Categoria';

async function getListaCategorias(): Promise<Categoria[]> {
    try {
      const response = await fetch('http://localhost:8080/categoria/categorias');
      const data = await response.json();
      return data as Categoria[];
    } catch (error) {
      console.error(error);
      return [];
    }
 }

export {
  getListaCategorias
}
