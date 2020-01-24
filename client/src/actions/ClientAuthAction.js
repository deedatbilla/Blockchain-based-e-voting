import { AUTHENTICATION_STATUS, SIGN_IN, SIGN_OUT } from "./types";
import axios from "axios";
import { host } from "../config/config";


export const isSignedIn = data => async dispatch => {
  const response = await axios.post("http://localhost:5000/users/login", data);
  const authData = {
    isAuthenticated: true,
    token: response.data.token,
    user: response.data.user
  };

  const token = response.data.token;
  localStorage.setItem("authdata", JSON.stringify(authData));
  setAuthToken(token);
  
  dispatch({
    type: SIGN_IN,
    payload:response.data.user
  });
};

export const isSignedOut = history => async dispatch => {
  const t = JSON.parse(localStorage.getItem("authdata"));

  // set header authorization token
  const config = {
    headers: { Authorization: `Bearer ${t.token}` }
  };
  const response = await axios.post(
    "http://localhost:5000/users/me/logout",
    t.user,
    config
  );
  
  localStorage.removeItem("authdata");

  dispatch({
    type: SIGN_OUT
  });

  history.push("/login");
};
