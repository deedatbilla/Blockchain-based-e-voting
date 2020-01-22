import React, { Component } from "react";
import { isSignedOut } from "../../../actions/Auth";
import { connect } from "react-redux";
class Votingpageheader extends Component {

	onlogout = (e) =>{
e.preventDefault()

this.props.isSignedOut(this.props.hist)
	}
  render() {
    return (
      <div>
        <header className="tr-header">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">
                  Voting
                </a>
              </div>
              <div className="navbar-left">
                <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a href="">Home</a>
                    </li>
                    <li className="">
                      <a href="">How it works</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-right">
                <ul className="nav navbar-nav">
                  <li className="dropdown mega-avatar">
                    <a
                      href=""
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <span className="avatar w-32">
                        <img
                          src="./voting page_files/1515503485.jpg"
                          className="img-resonsive img-circle"
                          width="25"
                          height="25"
                          alt="..."
                        />
                      </span>

                      <span>Avatar Twenty </span>
                    </a>
                    <div className="dropdown-menu w dropdown-menu-scale pull-right">
                      <a className="dropdown-item" href="">
                        <span>Dashboard</span>
                      </a>
                      <a className="dropdown-item" href="">
                        <span>Profile</span>
                      </a>
                      <a className="dropdown-item" href="">
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>

                <ul className="nav navbar-nav">
                  <li className="dropdown user user-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span
                        className="hidden-xs "
                        onClick={this.onlogout}
                      >
                        Logout{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default connect(null, { isSignedOut })(Votingpageheader);
