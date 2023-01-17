import axios, { AxiosResponse } from 'axios';
import { Categoria } from '../models/Categoria/Categoria';
import { urlBase } from '../const';

async function getListaCategorias(): Promise<Categoria[]> {
    try {
      const response = await fetch(urlBase+'/categoria/categorias');
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
