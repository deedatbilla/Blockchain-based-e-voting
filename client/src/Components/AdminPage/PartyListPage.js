import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import axios from  'axios'
import {host} from '../../config/config'
import Partylist from "./Layouts/Partylist";
import Footer from "./Layouts/Footer";

export default class PartyListPage extends Component {

  state = {
    parties:[]
  }
    async componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
        script.async = true;
        //script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);

        const res = await axios.get(host + "/fetchallparties")
        this.setState({parties:[...res.data.party]})

      }
  render() {
    return (
      <div>
          <div className="skin-green sidebar-mini">
        <div className="wrapper"></div>
        <AdminHeader />
        <Sidebar />
        <Partylist parties={this.state.parties}/>
        <Footer />
      </div>
      </div>
    );
  }
}
