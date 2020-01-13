import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import NewElectionForm from "./Layouts/NewElectionForm";
import Footer from "./Layouts/Footer";

const uuid = require('uuid/v1');
export default class CreateElection extends Component {
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
    return (
      <div className="skin-green sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <Sidebar />
          <NewElectionForm
            onChange={this.onChange}
            onSubmitPrez={this.onSubmitPrez}
            onSubmitParl={this.onSubmitParl}
            state={this.state}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
