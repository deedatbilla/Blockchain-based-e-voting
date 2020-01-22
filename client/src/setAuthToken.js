import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common={'Authorization' : `Bearer ${token}`};
    console.log(axios.defaults.headers.common)
  } else {
    console.log(axios.defaults.headers.common)
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
