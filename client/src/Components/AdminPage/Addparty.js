import React, { Component } from "react";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import AddpartyForm from "./Layouts/AddpartyForm";
import axios from "axios";
import Footer from "./Layouts/Footer";
import { host } from "../../config/config";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
export default class Addparty extends Component {
  state = {
    partyName: "",
    partyImg: "",
    loading: false
  };

  onFileChange = e => {
    this.setState({ partyImg: e.target.files[0] });
  };
  onNameChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { partyName } = this.state;
    const formData = new FormData();
    formData.append("partyImg", this.state.partyImg);
    formData.append("partyName", this.state.partyName);
    const res = await axios.post(host + "/party", formData);
    this.setState({ loading: false, partyName: "", partyImg: "" });
    console.log(res.data.party)
  };
  render() {
    return (
      <div>
        <div className="skin-green sidebar-mini">
          <div className="wrapper">
            <AdminHeader />
            <Sidebar />
            <AddpartyForm
              onNameChange={this.onNameChange}
              onFileChange={this.onFileChange}
              partyName={this.state.partyName}
              loading={this.state.loading}
              onSubmit={this.onSubmit}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
