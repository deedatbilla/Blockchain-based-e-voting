import React, { Component } from "react";
import AddvoterForm from "./Layouts/AddvoterForm";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Footer from "./Layouts/Footer";
import axios from "axios";
class Addvoter extends Component {
    state = {
        name: "",
        voter_id: "",
        email: "",
        constituency: "",
        password: ""
      };
  render() {
   
    onchange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    onsubmit = async e => {
        e.preventDefault()
        
       const response = await axios.post("http://localhost:5000/users", this.state);
        this.setState({
            name: "",
            voter_id: "",
            email: "",
            constituency: "",
            password: ""
        })

        console.log(this.state)
    };
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
