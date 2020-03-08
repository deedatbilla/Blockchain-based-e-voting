import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Summary from "./Layouts/Summary";
import axios from "axios";
import { host } from "../../config/config";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import Footer from "./Layouts/Footer";
class Dashboard extends Component {
  state = {
    partycount: 0,
    votercount: 0,
    prezstatistics: [],
    parlstatistics: []
  };
  async componentDidMount() {
    const { web3, accounts, contract } = this.props;
    const count = await contract.methods.getPresidentialCount().call();
    const parl_count = await contract.methods.getParliamentaryCount().call();

    //fetch parliamentary
    for (var i = 1; i <= parl_count; i++) {
      const response = await contract.methods
        .getParliamentaryCandidates(0, i)
        .call();

      this.setState(state => {
        const parlstatistics = state.parlstatistics.concat(response);
        return {
          parlstatistics
        };
      });
    }

    //fetch presidential
    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getPresidentialCandidates(0, i)
        .call();

      this.setState(state => {
        const prezstatistics = state.prezstatistics.concat(response);

        return {
          prezstatistics
        };
      });
    }
    const script = document.createElement("script");

    script.src =
      "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
    script.async = true;
    //script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);

    const resparty = await axios.get(host + "/fetchallparties");
    this.setState({ partycount: resparty.data.party.length });

    const resvoters = await axios.get(host + "/fetchallvoters");
    this.setState({ votercount: resvoters.data.user.length });
  }

  render() {
    return (
      <div className="wrapper">
        <AdminHeader />
        <Sidebar />
        <Summary
          partycount={this.state.partycount}
          votercount={this.state.votercount}
          prezstatistics={this.state.prezstatistics}
          parlstatistics={this.state.parlstatistics}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.contract
});
export default connect(mapStateToProps, { setconnection })(Dashboard);
