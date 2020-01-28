import React from "react";
import person from "../../../assets/person.png";
import { Link } from "react-router-dom";
export default function AdminHeader() {
  return (
    <div>
      <header className="main-header">
        <a href="" className="logo">
          <span className="logo-mini">
            <b>
              <i className="fa fa-user-md"></i>
            </b>
          </span>

          <span className="logo-lg">
            <b>Voting</b>
          </span>
        </a>

        <nav className="navbar  navbar-expand-lg navbar-light" role="navigation">
          <a
            href="#"
            className="sidebar-toggl e"
            data-toggle="offcanvas"
            role="button"
          >
            <span className=""><i style={{color:'white'}} className="fa fa-bars "></i></span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="fa fa-home"></i> Home Page
                </a>
              </li>

              <li className="nav-item">
                <Link to="/admin/createElection" className="nav-link">
                  <i className="fa fa-plus"></i> Create Election
                </Link>
              </li>


              <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Settings</a>
          <a className="dropdown-item" href="#">Profile</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
              
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
