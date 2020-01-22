import { AUTHENTICATION_STATUS, SIGN_IN, SIGN_OUT } from "../actions/types";

if (localStorage.getItem("authdata") == null) {
  const authStatus = {
    isAuthenticated: false,
    token: "",
    user:{}
  };
  localStorage.setItem("authdata", JSON.stringify(authStatus));
}
const status = JSON.parse(localStorage.getItem("authdata"));
const initialState = status;

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true
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
