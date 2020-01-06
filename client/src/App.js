import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Componentroot from "./Components/rootComponent";

class App extends Component {
  componentDidMount = async () => {
    // try {
    //   // Get network provider and web3 instance.
    //   const web3 = await getWeb3();
    //   // Use web3 to get the user's accounts.
    //   const accounts = await web3.eth.getAccounts();
    //   // Get the contract instance.
    //   const networkId = await web3.eth.net.getId();
    //   const deployedNetwork = ElectionCreation.networks[networkId];
    //   const instance = new web3.eth.Contract(
    //     ElectionCreation.abi,
    //     deployedNetwork && deployedNetwork.address,
    //   );
    //   // Set web3, accounts, and contract to the state, and then proceed with an
    //   // example of interacting with the contract's methods.
    //   this.setState({ web3, accounts, contract: instance },this.runExample);
    // } catch (error) {
    //   // Catch any errors for any of the above operations.
    //   alert(
    //     error
    //   );
    //   console.error("we have");
    // }
  };

  runExample = async () => {
    // const { accounts, contract } = this.state;
    // // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });
    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();
    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Componentroot />
        </div>
      </Provider>
    );
  }
}

export default App;
