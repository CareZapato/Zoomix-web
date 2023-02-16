import axios, { AxiosResponse } from 'axios';
import { urlBase } from '../const';

const getConfig = async (value:string) => {
  try {
    const response = await axios.get(urlBase+'/config/value/'+value);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getConfig
}
