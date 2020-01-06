import { GET_CONNECTION } from "./types";
import ElectionCreation from "../contracts/ElectionCreation.json";
import getWeb3 from "../getWeb3";

export const getconnection = () => async dispatch => {
  const web3 = await getWeb3();

  // Use web3 to get the user's accounts.
  const accounts = await web3.eth.getAccounts();

//   Get the contract instance.
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = ElectionCreation.networks[networkId];
  const instance = new web3.eth.Contract(
    ElectionCreation.abi,
    deployedNetwork && deployedNetwork.address
  );
  dispatch({
    type: GET_CONNECTION,
    web3: web3,
    accounts:accounts,
    contract:instance
  });
};
