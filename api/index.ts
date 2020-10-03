import axios, { AxiosPromise,AxiosInstance } from 'axios';

import { BASE_URL } from './config';
import {Fact} from '../redux/facts/types'

interface factsAPIInterface {
  getFacts: () => AxiosPromise<Fact[]>
}

const factsAPI: factsAPIInterface = {
  getFacts: async () => {
    return await axios
      .get(`${BASE_URL}/api/facts`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }
};

export default factsAPI;
