import axios from "axios";

const getAxios = (authToken = null) =>
  axios.create({
    baseURL: "<BACKEND_URL>",
    headers: {
      "auth-token": authToken,
    },
  });

export default getAxios;
