import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Adminlogin from "./AdminPage/Adminlogin";
import Dashboard from "./AdminPage/Dashboard";
import Clientlogin from "./Client/Clientlogin";
import VoterListPage from "./AdminPage/VoterListPage";
import CreateElection from "./AdminPage/CreateElection";
import Addparty from "./AdminPage/Addparty";
import PresidentialVotingPage from "./Client/PresidentialVotingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { setconnection } from "../actions/connectActions";

class rootComponent extends Component {

   componentDidMount(){
     this.props.setconnection()
   }
 
  render() {
    if (!this.props.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Clientlogin} />
            <Route exact path="/admin/login" component={Adminlogin} />
            <PrivateRoute
              exact
              path="/admin/dashboard"
              component={Dashboard}
              
            />
            <Route exact path="/admin/voterlist" component={VoterListPage} />
            <Route
              exact
              path="/client/president"
              component={PresidentialVotingPage}
            />
            <Route
              exact
              path="/admin/createElection"
              component={CreateElection}
            />
            <Route exact path="/admin/addparty" component={Addparty} />
            {/* <Route exact path='/admin' component={Admin}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
const AuthenticationStatus=JSON.parse(localStorage.getItem("authData"))
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthenticationStatus.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/admin/login',
          state: { from: props.location }
        }} />
  )} />
)
const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.instance
});
export default connect(mapStateToProps, { setconnection })(rootComponent);
