import { AUTHENTICATION_STATUS, SIGN_IN, SIGN_OUT } from "./types";
import axios from "axios";
import { host } from "../config/config";

export const isSignedIn = (data) => async (dispatch) => {
  try {
    const response = await axios.post(host + "/admin/login", data);
    const authData = {
      isAuthenticated: true,
      token: response.data.token,
      user: response.data.user,
    };

    const token = response.data.token;
    localStorage.setItem("Adminauthdata", JSON.stringify(authData));

    dispatch({
      type: SIGN_IN,
      error:'',
      payload: response.data.user,
      hasAccess:true
    });
  } catch (e) {
    dispatch({
      type: SIGN_IN,
      error:'invalid credentials',
      hasAccess:false
    });
  }
};

export const isSignedOut = (history) => async (dispatch) => {
  const t = JSON.parse(localStorage.getItem("Adminauthdata"));

  // set header authorization token
  const config = {
    headers: { Authorization: `Bearer ${t.token}` },
  };
  const response = await axios.post(host + "users/me/logout", t.user, config);

  localStorage.removeItem("Adminauthdata");

  dispatch({
    type: SIGN_OUT,
  });

  history.push("/admin/login");
};
