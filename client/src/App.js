import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Componentroot from "./Components/rootComponent";

class App extends Component {
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
