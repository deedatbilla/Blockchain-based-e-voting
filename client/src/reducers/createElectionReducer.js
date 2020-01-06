import { CREATE_ELECTION } from "../actions/types";

const initialState = {
  presidential: [],
  parliamentary: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ELECTION:
      return {
        ...state,
        presidential: [action.pres, ...state.presidential],
        parliamentary: [action.parl, ...state.parliamentary]
      };

    default:
      return state;
  }
}
