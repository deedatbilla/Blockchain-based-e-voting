import React, { Component } from "react";
import { isSignedOut } from "../../../actions/ClientAuthAction";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class Votingpageheader extends Component {
  onlogout = e => {
    e.preventDefault();
    //console.log(this.props.history)

    this.props.isSignedOut(this.props.history); 
   // this.props.history.push('/login')
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-secondary black navbar-right">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>Blockchain voting</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to={'/explorer'} className="nav-link">
                  Block Explorer
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Voting History
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.onlogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, { isSignedOut })(Votingpageheader);
