import axios from "axios";

const getAxios = (authToken = null) =>
  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      "auth-token": authToken,
    },
  });

export default getAxios;
