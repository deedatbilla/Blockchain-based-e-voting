import { GET_CONNECTION,SET_CONNECTION} from "../actions/types";
const initialState = { web3: null, accounts: null, contract: null };
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CONNECTION:
      return {
        ...state,
        web3: action.web3,
        accounts:action.accounts,
        contract:action.contract
      };
      case GET_CONNECTION:
        return{
          
        }
        return
    default:
      return state;
  }
}
