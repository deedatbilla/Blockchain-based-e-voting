import React, { Component } from "react";
import DetailWidget from "./presDetailWidget";
import parlDetailWidget from "./parlDetailWidget";
import { connect } from "react-redux";
import { createElection } from "../../../actions/createElectionAction";
import { setconnection } from "../../../actions/connectActions";
import uuid from 'uuid'
class NewElectionForm extends Component {


  state = {
    party: "",
    presname: "",
    parlname: "",
    district: ""
  };

  componentDidMount(){
    this.props.setconnection()
  }
  onSubmit = async e => {
    e.preventDefault();
    const {web3,accounts,contract,presidential,parliamentary}=this.props
    
    // // candidates arrays.
     await contract.methods.CreateElection(presidential,parliamentary,5).send({ from: accounts[0] });
    // // Get the value from the contract to prove it worked.
     const response = await contract.methods.getDeployedBallots(0).call();
    // // Update state with the result.
    // this.setState({ storageValue: response });
    console.log(response)
    
   
  };

  addCandidates = e => {
   
    const { party, presname, parlname, district } = this.state;
    const pres = {
      id:20,
      party,
      presname
    };
    const parl = {
      id:93,
      parlname,
      party,
      district
    };
    this.setState({
      party: "",
      presname: "",
      parlname: "",
      district: ""
    });

    this.props.createElection(pres, parl);
    
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {party,presname,parlname,district} =this.state
    return (
      <div>
        <div className="content-wrapper" style={{ minHeight: "475px" }}>
          <section className="content">
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Party name</label>
                      <div className="cal-icon">
                        <input
                          onChange={this.onChange}
                          className="form-control J_E_dates"
                          type="text"
                          value={party}
                          name="party"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Presidential candidate name</label>
                      <input
                        onChange={this.onChange}
                        className="form-control"
                        type="text"
                        value={presname}
                        name="presname"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Parliamentary candidate name</label>
                      <div className="cal-icon">
                        <input
                          className="form-control J_E_dates"
                          type="text"
                          value={parlname}
                          name="parlname"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Parliamentary candidate district</label>
                      <input
                        className="form-control"
                        type="text"
                        value={district}
                        name="district"
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-block btn-success"
                        onClick={this.addCandidates}
                      >
                        Add candidates
                      </button>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <button
                        type="submit"
                        onClick={this.onSubmit}
                        className="btn btn-block btn-success"
                      >
                        Submit to blockchain
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.connect.accounts,
  web3 : state.connect.web3,
  contract: state.connect.contract,
  presidential:state.createElection.presidential,
  parliamentary:state.createElection.parliamentary

});
export default connect(mapStateToProps, { createElection, setconnection })(
  NewElectionForm
);
