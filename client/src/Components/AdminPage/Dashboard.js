import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import Summary from './Summary'
class Dashboard extends Component {
  render() {
    return (
      <div className="skin-green sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <Sidebar />
          <Summary/>
        </div>
      </div>
    );
  }
}
export default Dashboard;
