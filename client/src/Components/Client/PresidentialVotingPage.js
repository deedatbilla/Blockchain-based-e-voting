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
    const {web3,accounts,contract} = this.props
    
   // fetch the list of all presidential candidates
     
     const response = await contract.methods.getPresidentialCandidates(0,).call();
  
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
