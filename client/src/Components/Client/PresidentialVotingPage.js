import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import CandidateCard from "./Layouts/CandidateCard";
import { createElection } from "../../actions/createElectionAction";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import InputDataDecoder from 'ethereum-input-data-decoder';
import  {abi} from './abi.json'

class PresidentialVotingPage extends Component {
  state = {
    Presidential: []
  };

  async componentDidMount() {
    this.props.setconnection();
    
    // TODO: - this code will be used to build the block explorer
    // const decoder = new InputDataDecoder(
    //   abi
    // );
    // const data =
    // "";
     const { web3, accounts, contract } = this.props;
    // const result= decoder.decodeData(data)
    // console.log(result) 
    // const trx_data={
    //   from : accounts[0],
    //   to: '0x611d853e6099b12c28dC95AEF16665011e59D702',
    //   value:0,
    //   data:"",
    // }
    // await web3.eth.sendTransaction(trx_data)
    const PresidentialCandidates = {
      id: "",
      name: "",
      party: "",
      votecount: ""
    };
    // fetch the list of all presidential candidates

    const count = await contract.methods.getPresidentialCount().call();
    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getPresidentialCandidates(0, i)
        .call();
      this.setState(state => {
        const Presidential = state.Presidential.concat(response);
        return {
          Presidential
        };
      });
    }

    console.log(this.state.Presidential);
  }

  render() {
    const { contract, accounts } = this.props;
    return (
      <div>
        <Votingpageheader />
        <div className="featured-users">
          <div className="container">
            <div className="row">
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1>Presidential Candidates</h1>
              </div>
              {this.state.Presidential.map(data => (
                <CandidateCard
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  count={data.count}
                  party={data.party}
                  contract={contract}
                  accounts={accounts}
                  state={this.state}
                />
              ))}
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
  contract: state.connect.contract
});
export default connect(mapStateToProps, { setconnection })(
  PresidentialVotingPage
);
