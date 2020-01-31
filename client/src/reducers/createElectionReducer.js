import { ADD_PREZ, ADD_PARL } from "../actions/types";

if (
  localStorage.getItem("prescandidates") == null ||
  localStorage.getItem("parlcandidates") == null ||
  localStorage.getItem("presCID") == null ||
  localStorage.getItem("parlCID") == null 

) {
  const presidential = [];
  const parliamentary = [];
  const presCID = 1;
  const parlCID = 1;

  localStorage.setItem("prescandidates", JSON.stringify(presidential));
  localStorage.setItem("parlcandidates", JSON.stringify(parliamentary));
  localStorage.setItem("presCID", JSON.stringify(presCID));
  localStorage.setItem("parlCID", JSON.stringify(parlCID));
}
const pres = JSON.parse(localStorage.getItem("prescandidates"));
const parl = JSON.parse(localStorage.getItem("parlcandidates"));
const initialState = {
  presidential: pres,
  parliamentary: parl
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PREZ:
      return {
        ...state,
        presidential: [action.payload, ...state.presidential]
      };

    case ADD_PARL:
      return {
        ...state,
        parliamentary: [action.payload, ...state.parliamentary]
      };

    default:
      return state;
  }
}
