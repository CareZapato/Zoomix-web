import axios, { AxiosResponse } from 'axios';
import { urlBase } from '../const';

const getConfig = async (value:string) => {
  try {
    const response: string = await axios.get(urlBase+'/config/'+value);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export {
  getConfig
}
