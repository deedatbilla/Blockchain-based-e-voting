import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Form from "../Form";

import HeaderSecondary from "../HeaderSecondary";
import "../../css/login.css";
import "../../css/style.css";
class Adminlogin extends Component {
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
  render() {
    const { IDnumber, password } = this.state;
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form name="Admin Login"  onChange={this.onChange} onSubmit={this.onSubmit} />
        <Footer />
      </div>
    );
  }
}

export default Adminlogin;
