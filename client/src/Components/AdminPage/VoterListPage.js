import React, { Component } from "react";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import axios from  'axios'
import {host} from '../../config/config'
import Voterlist from "./Layouts/Voterlist";
import Footer from "./Layouts/Footer";

export default class VoterListPage extends Component {

  state = {
    voters:[]
  }
    async componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "https://www.themashabrand.com/scripts/Voting/source/assets/js/app.min.js";
        script.async = true;
        //script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);

        const res = await axios.get(host + "/fetchallvoters")
        this.setState({voters:[...res.data.user]})

      }
  render() {
    return (
      <div>
          <div className="skin-green sidebar-mini">
        <div className="wrapper"></div>
        <AdminHeader />
        <Sidebar />
        <Voterlist voters={this.state.voters}/>
        <Footer />
      </div>
      </div>
    );
  }
}
