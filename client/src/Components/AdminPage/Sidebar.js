import React from "react";
import person from "../../assets/person.png";
import {Link} from 'react-router-dom'
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
              <Link to='/admin/Dashboard'>
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-users"></i> <span>Voters</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <Link to='/admin/voterlist'>
                    Voters List
                  </Link>
                </li>
                <li>
                  <a href="#">
                    Add Voter
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-align-left"></i> <span>Organizations</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="">
                    Organization List
                  </a>
                </li>
                <li>
                  <a href="">
                    Add Organization
                  </a>
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
            <li className="treeview">
              <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#">
                <i className="fa fa-users"></i> <span>Nominees</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/nomineelist">
                    Nominees List
                  </a>
                </li>
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/addnominee">
                    Add Nominee
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#">
                <i className="fa fa-files-o"></i> <span>Language</span>{" "}
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/languagelist">
                    Language List
                  </a>
                </li>
                <li>
                  <a href="https://www.themashabrand.com/scripts/Voting/admin/addlanguage">
                    Add Language
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
