import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/main.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import NewElectionForm from "./Layouts/NewElectionForm";
import ImageUploader from "react-images-upload";
import Footer from "./Layouts/Footer";
import Districts from "./Layouts/Districts";
import { connect } from "react-redux";
import axios from "axios";
import CandidatesListTable from "./Layouts/CandidatesListTable";
import { AddPresCand, AddParlCand } from "../../actions/createElectionAction";
const uuid = require("uuid/v1");

class CreateElection extends Component {
  state = {
  
    party: "",
    name: "",
    
    district: "",
    profileImg: "",
    manifesto: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmitPrez = async e => {
    e.preventDefault();
    const { name, party, manifesto } = this.state;
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    formData.append("cid", uuid());
    const res = await axios.post(
      "http://localhost:5000/candidate/image",
      formData
    );
    const imgURL = res.data.candidate.profileImg;
    const id = res.data.candidate.cid;

    const NewPrezCandidate = {
      id: id,
      name,
      party,
      manifesto,
      imgURL
    };

    this.props.AddPresCand(NewPrezCandidate)
    this.setState({
  
      name: "",
      party: "",
      district: "",
      manifesto: ""
    });
  };

  onSubmitParl = async e => {
    e.preventDefault();
    const { name, party, district, manifesto } = this.state;
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);
    formData.append("cid", uuid());

    const res = await axios.post(
      "http://localhost:5000/candidate/image",
      formData
    );
    const imgURL = res.data.candidate.profileImg;
    const id = res.data.candidate.cid;

    const NewParlCandidate = {
      id: id,
      name,
      party,
      district,
      manifesto,
      imgURL,
      voteCount: 0
    };
    this.setState({
     
      name: "",
      party: "",
      district: "",
      profileImg: "",
      manifesto: ""
    });

    this.props.AddParlCand(NewParlCandidate);
  };

  onFileChange = e => {
    this.setState({ profileImg: e.target.files[0] });
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
    const {
      party,
      name,
      manifesto
    } = this.state;

    return (
      <div className="skin-green sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <Sidebar/>
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
                <form onSubmit={this.onSubmitPrez}>
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
                        name="name"
                        onChange={this.onChange}
                        type="text"
                        value={name}
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
                        name="party"
                        onChange={this.onChange}
                        value={party}
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
                      name="manifesto"
                      onChange={this.onChange}
                      value={manifesto}
                      id="orangeForm-pass"
                      className="form-control validate"
                    />
                  </div>
                  <div className="pull-right">
                  <input
                        type="file"
                        className="form control btn btn-primary"
                        onChange={this.onFileChange}
                      />
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-warning">Submit</button>
                </div>
                </form>
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
                <form onSubmit={this.onSubmitParl}>
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
                          name="name"
                          value={name}
                          onChange={this.onChange}
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
                          name="party"
                          placeholder="Party"
                          type="text"
                          value={party}
                          onChange={this.onChange}
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
                      <Districts onChange={this.onChange} />
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
                        name="manifesto"
                        value={manifesto}
                        onChange={this.onChange}
                        id="orangeForm-pass"
                        className="form-control validate"
                      />
                    </div>
                    <div className=" pull-right form group">
                      <input
                        type="file"
                        className="form control btn btn-primary"
                        onChange={this.onFileChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
                  </div>
                </form>
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
export default connect(mapStateToProps, { AddPresCand, AddParlCand })(
  CreateElection
);
