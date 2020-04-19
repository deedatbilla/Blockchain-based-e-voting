import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import CandidateCard from "./Layouts/CandidateCard";
import Footer  from "../Client/Layouts/Footer"
import { createElection } from "../../actions/createElectionAction";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import InputDataDecoder from "ethereum-input-data-decoder";
import {host} from '../../config/config'
import { abi } from "./abi.json";
import axios from 'axios'


class PresidentialVotingPage extends Component {
  state = {
    Presidential: [],
    count:0,
    thereIsElection: false
  };


  

  
  async componentDidMount() {
    this.props.setconnection();
   
    // this.setState({
    //   profile: this.state.profile.concat(...res.data.candidate)
    // })

    // TODO: - this code will be used to build the block explorer
    // const decoder = new InputDataDecoder(
    //   abi
    // );
    // const data =
    // "";
    const { web3, accounts, contract } = this.props;
    var latestBlock = web3.eth.blockNumber;
    console.log(latestBlock)
    // for (var i = 0; i < 10; i++) {
    //   var block = web3.eth.getBlock(latestBlock - i);
    //   var number = block.number;
    //   var hash = block.hash;
    //   var time = block.timestamp;
    //   console.log(block)
    //   //$('tbody').append("<tr><td>" + number + "</td><td>" + hash + "</td><td>" + time + "</td></tr>");
    // }

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
      manifesto: "",
      votecount: ""
    };
    // fetch the list of all presidential candidates

    const count = await contract.methods.getPresidentialCount().call();
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
          <Votingpageheader hist={this.props.history} />
          <div>No election today</div>

          <Footer/>
        </div>
      );
    }
    const { contract, accounts } = this.props;
    return (
      <div>
        <Votingpageheader hist={this.props.history} />
        <div className="featured-users">
          <div className="container">
            <div >
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1>Presidential Candidates</h1>
              </div>
              
                <CandidateCard
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
  PresidentialVotingPage
);
