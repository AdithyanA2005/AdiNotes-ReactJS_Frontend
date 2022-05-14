import axios from "axios";

const getAxios = (authToken = null) =>
  axios.create({
    baseURL: "http://127.168.1.2:5000/api/v1",
    headers: {
      "auth-token": authToken,
    },
  });

export default getAxios;
