import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Summary from "./Layouts/Summary";
import axios from 'axios'
import {host} from  '../../config/config'
import Footer from "./Layouts/Footer";
class Dashboard extends Component {

  state={
    partycount:0,
    votercount:0
  }
  async componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
    script.async = true;
    //script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);

    const resparty = await axios.get(host + "/fetchallparties")
    this.setState({partycount:resparty.data.party.length})

    const resvoters = await axios.get(host + "/fetchallvoters")
    this.setState({votercount:resvoters.data.user.length})

  
  }

 
  render() {
    return (
   
        <div className="wrapper">
          <AdminHeader />
          <Sidebar />
          <Summary partycount={this.state.partycount} votercount={this.state.votercount} />
          <Footer />
          </div>
        
      
    );
  }
}


export default Dashboard;
