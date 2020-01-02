import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

import HeaderSecondary from "./HeaderSecondary";
import "../css/login.css";
import "../css/style.css";
class login extends Component {
  state = {
    IDnumber: "",
    password: ""
  };
  onSubmit = e => {
    const { IDnumber, password } = this.state;
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { IDnumber, password } = this.state;
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form name="Admin Login" />
        <Footer />
      </div>
    );
  }
}

export default login;
