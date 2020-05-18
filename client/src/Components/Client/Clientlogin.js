import React, { Component } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Form from "./Layouts/Form";
import { isSignedIn } from "../../actions/ClientAuthAction";
import { connect } from "react-redux";

import HeaderSecondary from "./Layouts/HeaderSecondary";
class Clientlogin extends Component {
  state = {
    IDnumber: "",
    password: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    const { IDnumber, password } = this.state;
    const data = {
      voter_id: IDnumber,
      password: password
    };

    this.props.isSignedIn(data,this.props.history);
  };

  // componentDidMount() {
  //   if (this.props.authStatus) {
  //     this.props.history.push("/");
  //   }
  // }
  // static getDerivedStateFromProps (props) {
  //   if (props.authStatus) {
  //     props.history.push("/");
  //   }
  // }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form
          FormName="Voter Login"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          placeholder={"voter ID"}
          name={"IDnumber"}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authStatus: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { isSignedIn })(Clientlogin);
