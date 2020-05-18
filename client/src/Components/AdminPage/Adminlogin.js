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
    password: "",
    loading: false,
  };
  onSubmit = async (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password,
    };

    await this.props.isSignedIn(data);
    if(this.props.error){
      alert(this.props.error)
    }
    
    this.setState({ loading: false });
  };

  componentDidMount() {
    if (this.props.authStatus) {
      this.props.history.push("/admin/Dashboard");
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.authStatus) {
      props.history.push("/admin/Dashboard");
    }
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { IDnumber, password } = this.state;
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form
          FormName="Admin Login"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          placeholder={"Email"}
          name={"email"}
          loading={this.state.loading}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.adminAuth.isAuthenticated,
  error: state.adminAuth.error,
});
export default connect(mapStateToProps, { isSignedIn })(Adminlogin);
