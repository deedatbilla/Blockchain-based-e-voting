import React, { Component } from "react";
import DetailWidget from "./presDetailWidget";
import parlDetailWidget from "./parlDetailWidget";
import { connect } from "react-redux";
import { createElection } from "../../../actions/createElectionAction";
import { setconnection } from "../../../actions/connectActions";

class NewElectionForm extends Component {
  state = {
    party: '',
    presname: '',
    parlname: '',
    district: ''
  };
  onSubmit = e => {};

  addCandidates = e => {
    const { party, presname, parlname, district } = this.state;
    const pres = {
      party,
      presname
    };
    const parl = {
      parlname,
      party,
      district
    };
    this.setState({
      party: '',
      presname: '',
      parlname: '',
      district: ''
    });

    this.props.createElection(pres, parl);
   
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
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
export default connect(null, { createElection, setconnection })(
  NewElectionForm
);
