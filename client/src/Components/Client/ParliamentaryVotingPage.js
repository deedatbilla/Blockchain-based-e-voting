import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import ParlCandidateCard from "./Layouts/ParlCandidateCard";
import Footer  from "../Client/Layouts/Footer"
import { createElection } from "../../actions/createElectionAction";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import InputDataDecoder from "ethereum-input-data-decoder";
import {host} from '../../config/config'
import { abi } from "./abi.json";
import axios from 'axios'


class ParliamentaryVotingPage extends Component {
  state = {
    Presidential: [],
    count:0,
    thereIsElection: false
  };


  

  
  async componentDidMount() {
    this.props.setconnection();
   
    
    const { web3, accounts, contract } = this.props;

    const PresidentialCandidates = {
      id: "",
      name: "",
      party: "",
      manifesto: "",
      votecount: ""
    };
    // fetch the list of all presidential candidates

    const count = await contract.methods.getParliamentaryCount().call();
    this.setState({count:count})
    console.log(count)
    if (count > 0) {
      this.setState({
        thereIsElection: true
      });

     
    }
  }

  render() {
    const { thereIsElection } = this.state;
    if (!thereIsElection) {
      return (
        <div className="container ">
          <Votingpageheader history={this.props.history} />
          <div>No election today</div>

          <Footer/>
        </div>
      );
    }
    const { contract, accounts } = this.props;
    return (
      <div>
        <Votingpageheader history={this.props.history} />
        <div className="featured-users">
          <div className="container">
            <div >
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1>Presidential Candidates</h1>
              </div>
              
                <ParlCandidateCard
                  contract={contract}
                  accounts={accounts}
                  count ={this.state.count}
                
                />
             
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.contract
});
export default connect(mapStateToProps, { setconnection })(
    ParliamentaryVotingPage
);
