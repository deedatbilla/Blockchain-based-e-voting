import { AUTHENTICATION_STATUS, SIGN_IN, SIGN_OUT } from "../actions/types";

if (localStorage.getItem("Adminauthdata") == null) {
  const authStatus = {
    isAuthenticated: false,
    token: "",
    user:{}
  };
  localStorage.setItem("Adminauthdata", JSON.stringify(authStatus));
}
const status = JSON.parse(localStorage.getItem("Adminauthdata"));
const initialState = status;

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: action.hasAccess,
        error:action.error
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: ""
      };

    default:
      return state;
  }
}
