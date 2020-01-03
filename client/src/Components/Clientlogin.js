import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

import HeaderSecondary from "./HeaderSecondary";
export default class Clientlogin extends Component {
    state = {
        IDnumber: "",
        password: ""
      };
      onSubmit = (e) => {
        e.preventDefault()
        const { IDnumber, password } = this.state;
        console.log(password)
      };
      onChange = e => this.setState({ [e.target.name]: e.target.value });
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form name="Voter Login" onChange={this.onChange} onSubmit={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}
