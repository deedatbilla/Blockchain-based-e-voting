import { AUTHENTICATION_STATUS, SIGN_IN, SIGN_OUT } from "../actions/types";

if (localStorage.getItem('authData') == null) {
  const authStatus={
    isAuthenticated:false,
    token:""
  }
  localStorage.setItem("authData", JSON.stringify(authStatus))
}
const status= JSON.parse(localStorage.getItem("authData"))
const initialState = status;

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
       
      };
    case SIGN_OUT:
      return {};
      
    default:
      return state;
  }
}
