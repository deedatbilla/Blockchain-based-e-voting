import { ADD_PREZ,ADD_PARL } from "../actions/types";

export const AddPresCand = presidential => {
  let tempArray = [];
  const candidates = JSON.parse(localStorage.getItem("prescandidates"));
  //console.log(candidates)
  tempArray = [...candidates];
  tempArray.push(presidential);
  localStorage.setItem("prescandidates", JSON.stringify(tempArray))
  console.log(JSON.parse(localStorage.getItem("prescandidates")))
  

  return {
    type: ADD_PREZ,
    payload: presidential,
   
  };
};


export const AddParlCand = parliamentary => {
  let tempArray = [];
  const candidates = JSON.parse(localStorage.getItem("parlcandidates"));
  tempArray = [...candidates];
  tempArray.push(parliamentary);
  localStorage.setItem("parlcandidates", JSON.stringify(tempArray))
  
  

  return {
    type: ADD_PARL,
    payload: parliamentary,
   
  };
};
