import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/main.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import NewElectionForm from "./Layouts/NewElectionForm";
import Footer from "./Layouts/Footer";
import Districts from "./Layouts/Districts";
import { connect } from "react-redux";
import CandidatesListTable from "./Layouts/CandidatesListTable";
import { AddPresCand } from "../../actions/createElectionAction";
const uuid = require("uuid/v1");

class CreateElection extends Component {
  state = {
    presidential: [],
    parliamentary: [],
    prezname: "",
    prezparty: "",
    parlname: "",
    parlparty: "",
    district: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmitPrez = async e => {
    e.preventDefault();
    const { prezname, prezparty } = this.state;
    const NewPrezCandidate = {
      id: uuid,
      prezname,
      prezparty
    };

    this.setState(state => {
      const presidential = state.presidential.concat(NewPrezCandidate);
      return {
        presidential,
        prezname: "",
        prezparty: "",
        parlname: "",
        parlparty: "",
        district: ""
      };
    });
  };

  onSubmitParl = async e => {
    e.preventDefault();
    const { parlname, parlparty, district } = this.state;

    const NewParlCandidate = {
      id: uuid,
      parlname,
      parlparty,
      district
    };
    this.setState(state => {
      const parliamentary = state.parliamentary.concat(NewParlCandidate);
      return {
        parliamentary,
        prezname: "",
        prezparty: "",
        parlname: "",
        parlparty: "",
        district: ""
      };
    });
  };
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    const { presidential, parliamentary } = this.props;
    return (
      <div className="skin-green sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <Sidebar />
          <div class="content-wrapper">
            <CandidatesListTable
              type="Presidential Candidates"
              cands={presidential}
            />
            <CandidatesListTable
              type="Parliamentary Candidates"
              cands={parliamentary}
              isparl={true}
            />
          </div>

          {/* <NewElectionForm
            onChange={this.onChange}
            onSubmitPrez={this.onSubmitPrez}
            onSubmitParl={this.onSubmitParl}
            state={this.state}
          /> */}
          <Footer />
          <div
            className="modal fade"
            id="presidentModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title w-100 font-weight-bold">
                    Add Presidential Candidate
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="row">
                    <div className="md-form mb-5 col-md-6">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="orangeForm-name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        id="orangeForm-name"
                        className="form-control validate"
                      />
                    </div>

                    <div className="md-form mb-5 col-md-6">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="orangeForm-email"
                      >
                        Party
                      </label>
                      <input
                        placeholder="Party"
                        type="text"
                        id="orangeForm-email"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                  <div className="md-form mb-4">
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="orangeForm-pass"
                    >
                      Manifesto
                    </label>
                    <textarea
                      id="orangeForm-pass"
                      className="form-control validate"
                    />
                  </div>
                  <div className=" pull-right">
                    <input type="file" className="btn btn-primary" />
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-warning">Submit</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="parliamentaryModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title w-100 font-weight-bold">
                    Add Parliamentary Candidate
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="row">
                    <div className="md-form mb-5 col-md-6">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="orangeForm-name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        id="orangeForm-name"
                        className="form-control validate"
                      />
                    </div>

                    <div className="md-form mb-5 col-md-6">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="orangeForm-email"
                      >
                        Party
                      </label>
                      <input
                        placeholder="Party"
                        type="text"
                        id="orangeForm-email"
                        className="form-control validate"
                      />
                    </div>
                  </div>
                  <div className="md-form mb-4">
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="orangeForm-pass"
                    >
                      District
                    </label>
                    <Districts />
                  </div>
                  <div className="md-form mb-4">
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="orangeForm-pass"
                    >
                      Manifesto
                    </label>
                    <textarea
                      id="orangeForm-pass"
                      className="form-control validate"
                    />
                  </div>
                  <div className=" pull-right">
                    <input type="file" className="btn btn-primary" />
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-warning">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  presidential: state.createElection.presidential,
  parliamentary: state.createElection.parliamentary
});
export default connect(mapStateToProps, { AddPresCand })(CreateElection);
