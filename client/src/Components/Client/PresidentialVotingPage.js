import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import CandidateCard from "./Layouts/CandidateCard";
import { createElection } from "../../actions/createElectionAction";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
class PresidentialVotingPage extends Component {

    state={
        Presidential:[]
    }
  componentDidMount() {
    this.props.setconnection();
    const {web3,accounts,contract}=this.props
    
    // // candidates arrays.
     await contract.methods.CreateElection(presidential,parliamentary,500000000000000,accounts[0]).send({ from: accounts[0] });
    // // Get the value from the contract to prove it worked.
     const response = await contract.methods.getDeployedBallots(0).call();
    // // Update state with the result.
    // this.setState({ storageValue: response });
    console.log(response)
  }

  render() {
    return (
      <div>
        <Votingpageheader />
        <div className="featured-users">
          <div className="container">
            <div className="row">
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1>Presidential Candidates</h1>
              </div>
              <CandidateCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.contract,
});
export default connect(mapStateToProps, { setconnection })(
  PresidentialVotingPage
);
