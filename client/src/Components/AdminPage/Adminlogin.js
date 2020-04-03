import React, { Component } from "react";
import Header from "../Client/Layouts/Header";
import Footer from "../Client/Layouts/Footer";
import Form from "../Client/Layouts/Form";

import HeaderSecondary from "../Client/Layouts/HeaderSecondary";
import "../../css/login.css";
import "../../css/style.css";
import { isSignedIn } from "../../actions/AdminAuthAction.js";
import { connect } from "react-redux";
class Adminlogin extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password
    };

    this.props.isSignedIn(data);
  };

  componentDidMount() {
    if (this.props.authStatus) {
      this.props.history.push("/admin/Dashboard");
    }
  }
  static getDerivedStateFromProps(props,state) {
    if (props.authStatus) {
      props.history.push("/admin/Dashboard");
    }
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { IDnumber, password } = this.state;
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form FormName="Admin Login"  onChange={this.onChange} onSubmit={this.onSubmit} 
          placeholder={"Email"}
          name={"email"}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authStatus: state.adminAuth.isAuthenticated
});
export default connect(mapStateToProps, { isSignedIn })(Adminlogin);
