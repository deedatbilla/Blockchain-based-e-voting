import React from "react";
import person from "../../../assets/person.png";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={person} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Admin</p>

              <a href="">
                <i className="fa fa-circle text-success"></i> Online
              </a>
            </div>
          </div>

          <ul className="sidebar-menu">
            <li className="header">Header</li>

            <li className=" active">
              <Link to="/admin/Dashboard">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="/admin/voterlist">
                <i className="fa fa-users"></i> <span>Voters</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </Link>
              <ul className="treeview-menu">
                <li>
                <Link to="/admin/addvoter">
                    Add Voter
                  </Link>
                </li>
                <li>
                <Link to="/admin/voterlist">
                    Voter List
                  </Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-align-left"></i> <span>Parties</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="">Party List</a>
                </li>
                <li>
                  <Link to="/admin/addparty">Add Party</Link>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#">
                <i className="fa fa-align-left"></i> <span>Positions</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/positionlist">
                    Position List
                  </a>
                </li>
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/addposition">
                    Add Position
                  </a>
                </li>
              </ul>
            </li>

            <li className="">
              <a href="https://www.themashabrand.com/scripts/Voting/admin/settings/site">
                <i className="fa fa-cogs"></i> <span>Settings</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
export default Sidebar;
