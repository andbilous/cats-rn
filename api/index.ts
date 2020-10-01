import axios from "axios";

import { BASE_URL } from "./config";

const factsAPI = {
  getFacts: async () => {
    return await axios
      .get(`${BASE_URL}/api/facts`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {});
  },
};

export default factsAPI;
