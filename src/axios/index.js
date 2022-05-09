import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.168.1.2:5000/api/v1",
  headers: {
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3NGI2ZmRiYzBmNzI4NTY3MGRiOTU4In0sImlhdCI6MTY1MTgxNjE4OX0.s1CKpm3X-WKPyvCU5yQmghRmvZ8LgDulPNRxos5tn9Y",
  },
});

export default instance;
