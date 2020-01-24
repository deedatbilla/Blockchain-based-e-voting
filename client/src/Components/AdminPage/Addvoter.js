import React, { Component } from "react";
import AddvoterForm from "./Layouts/AddvoterForm";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Footer from "./Layouts/Footer";
class Addvoter extends Component {
    state = {
        name: "",
        id: "",
        email: "",
        constituency: "",
        pin: ""
      };
  render() {
   
    onchange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    onsubmit = e => {};
    return (
      <div>
        <div className="skin-green sidebar-mini">
          <div className="wrapper">
            <AdminHeader />
            <Sidebar />
            <AddvoterForm
              onchange={this.onchange}
              onsubmit={this.onsubmit}
              state={this.state}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Addvoter;
