import React, { Component } from "react";
import Header from "../Client/Layouts/Header";
import Footer from "../Client/Layouts/Footer";
import Form from "../Client/Layouts/Form";

import HeaderSecondary from "../Client/Layouts/HeaderSecondary";
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
