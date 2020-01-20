import React, { Component } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Form from "./Layouts/Form";
import {isSignedIn} from '../../actions/Auth'
import {connect} from 'react-redux'

import HeaderSecondary from "./Layouts/HeaderSecondary";
 class Clientlogin extends Component {
    state = {
        IDnumber: "",
        password: ""
      };
     
      onChange = e => this.setState({ [e.target.name]: e.target.value });
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form name="Voter Login" onChange={this.onChange} inputs={this.state} />
        <Footer />
      </div>
    );
  }
}


export default connect(null,{isSignedIn}) (Clientlogin)
