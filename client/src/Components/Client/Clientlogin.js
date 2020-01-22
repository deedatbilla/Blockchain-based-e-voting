import React, { Component } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Form from "./Layouts/Form";
import { isSignedIn } from "../../actions/Auth";
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

    this.props.isSignedIn(data);
  };

  componentDidMount() {
    if (this.props.authStatus) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(props) {
    if (props.authStatus) {
      this.props.history.push("/");
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Header />
        <HeaderSecondary />
        <Form
          name="Voter Login"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
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
