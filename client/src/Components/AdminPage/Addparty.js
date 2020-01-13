import React, { Component } from "react";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import AddpartyForm from "./Layouts/AddpartyForm";
import Footer from "./Layouts/Footer";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
export default class Addparty extends Component {
  render() {
    return (
      <div>
        <div className="skin-green sidebar-mini">
          <div className="wrapper">
            <AdminHeader />
            <Sidebar />
            <AddpartyForm />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
