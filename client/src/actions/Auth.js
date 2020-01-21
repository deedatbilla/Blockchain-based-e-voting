import { AUTHENTICATION_STATUS, SIGN_IN,SIGN_OUT } from "./types";
import axios from "axios";
import { host } from "../config/config";

export const isSignedIn = (data) => async dispatch => {
  
  const response = await axios.post("http://localhost:5000/users/login", data);
  const authData = {
    isAuthenticated: true,
    token: response.data.token
  };
  const token = response.data.token;
  localStorage.setItem("authdata", JSON.stringify(authData));
  console.log(authData)

  dispatch({
    type: SIGN_IN,
  });
};


export const isSignedOut = (Rtoken) => async dispatch => {
  
  const response = await axios.post("http://localhost:5000/users/me/logout", Rtoken);
  const authData = {
    isAuthenticated: false,
    token: ""
  };
  
  localStorage.setItem("authdata", JSON.stringify(authData));
  console.log(authData)

  dispatch({
    type: SIGN_OUT,
  });
};
