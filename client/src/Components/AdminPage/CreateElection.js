import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import NewElectionForm from './Layouts/NewElectionForm'
import Footer from "./Layouts/Footer";
export default class CreateElection extends Component {
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
          <NewElectionForm/>
          <Footer />
        </div>
      </div>
    );
  }
}
