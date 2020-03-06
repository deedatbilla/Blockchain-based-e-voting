import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import CandidateCard from "./Layouts/CandidateCard";
import Footer  from "../Client/Layouts/Footer"
import { createElection } from "../../actions/createElectionAction";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import InputDataDecoder from "ethereum-input-data-decoder";
import { abi } from "./abi.json";
import axios from 'axios'


class PresidentialVotingPage extends Component {
  state = {
    Presidential: [],
    
    thereIsElection: false
  };


  fetchData = async () => {

    const res = await axios.get("http://localhost:5000/candidate/profile")
    this.setState({
      profile: this.state.profile.concat(...res.data.candidate)
    })

    // const all=this.state.profile.filter(data=>data.cid !== 2)
    // console.log(all)


  }

  
  async componentDidMount() {
    this.props.setconnection();
    const res = await axios.get("http://localhost:5000/candidate/profile")
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
    if (count > 0) {
      this.setState({
        thereIsElection: true
      });

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
              {this.state.Presidential.map(data => (
                <CandidateCard
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  count={data.count}
                  party={data.party}
                  profile={data.imgURL}
                  manifesto={data.manifesto}
                  contract={contract}
                  accounts={accounts}
                  vote={this.vote}
                />
              ))}
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
