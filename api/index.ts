import axios, { AxiosPromise } from 'axios';

import { BASE_URL } from './config';

interface factsAPIInterface {
  getFacts: () => AxiosPromise
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
