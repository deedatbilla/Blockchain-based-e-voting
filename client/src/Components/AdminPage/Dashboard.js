import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Summary from "./Layouts/Summary";
import Footer from "./Layouts/Footer";
class Dashboard extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
    script.async = true;
    //script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  }

 
  render() {
    return (
      <div className="skin-green sidebar-mini">
        <div className="wrapper">
          <AdminHeader />
          <Sidebar />
          <Summary />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Dashboard;
