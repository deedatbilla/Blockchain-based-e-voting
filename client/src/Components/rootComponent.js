import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Addvoter from "./AdminPage/Addvoter";
import Adminlogin from "./AdminPage/Adminlogin";
import Dashboard from "./AdminPage/Dashboard";
import Clientlogin from "./Client/Clientlogin";
import VoterListPage from "./AdminPage/VoterListPage";
import CreateElection from "./AdminPage/CreateElection";
import Addparty from "./AdminPage/Addparty";
import PartyListPage from "../Components/AdminPage/PartyListPage";
import "bootstrap/dist/css/bootstrap.min.css";
import PresidentialVotingPage from "./Client/PresidentialVotingPage";
import ElectionCategoryPage from "./Client/ElectionCategoryPage";
import ParliamentaryVotingPage from './Client/ParliamentaryVotingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { setconnection } from "../actions/connectActions";
const AuthenticationStatus = JSON.parse(localStorage.getItem("authdata"));
const AdminAuthenticationStatus = JSON.parse(localStorage.getItem("Adminauthdata"));
class rootComponent extends Component {
  componentDidMount() {
    this.props.setconnection();
  }

  render() {
    if (!this.props.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Clientlogin} />
            <Route exact path="/admin/login" component={Adminlogin} />
            <PrivateRouteAdmin exact path="/admin/dashboard" component={Dashboard} />
            <PrivateRouteAdmin exact path="/admin/addvoter" component={Addvoter} />
            <PrivateRouteAdmin exact path="/admin/voterlist" component={VoterListPage} />
            <PrivateRouteAdmin exact path="/admin/parties" component={PartyListPage} />

            <PrivateRouteClient
              exact
              path="/presidential"
              component={PresidentialVotingPage}
            />
             <PrivateRouteClient
              exact
              path="/parliamentary"
              component={ParliamentaryVotingPage}
            />

            <PrivateRouteClient exact path="/" component={ElectionCategoryPage} />
            <Route
              exact
              path="/admin/createElection"
              component={CreateElection}
            />
            <PrivateRouteAdmin exact path="/admin/addparty" component={Addparty} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const PrivateRouteClient = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthenticationStatus.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AdminAuthenticationStatus.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PrivateRouteSuperAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthenticationStatus.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.instance,
  authStatus: state.auth.isAuthenticated,
  AdminAuthStatus:state.adminAuth.isAuthenticated
});
export default connect(mapStateToProps, { setconnection })(rootComponent);
