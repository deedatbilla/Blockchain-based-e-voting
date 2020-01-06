import { GET_CONNECTION } from "../actions/types";
const initialState = { web3: null, accounts: null, contract: null };
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONNECTION:
      return {
        ...state,
        web3: action.web3,
        accounts:action.accounts,
        contract:action.contract
      };
    default:
      return state;
  }
}
