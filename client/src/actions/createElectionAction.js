import { CREATE_ELECTION } from "../actions/types";

export const createElection = (presidential, parliamentary) => {
  return {
    type: CREATE_ELECTION,
    pres: presidential,
    parl: parliamentary
  };
};
