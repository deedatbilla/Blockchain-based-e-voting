import React from 'react'
import person from '../../assets/person.png'

export default function AdminHeader() {
    return (
        <div>
             <header className="main-header">
      <a href="https://www.themashabrand.com/scripts/Voting/" className="logo">
      
       <span className="logo-mini"><b><i className="fa fa-user-md"></i></b></span>
       
       <span className="logo-lg"><b>
       	Voting</b></span>
      </a>

     
      <nav className="navbar navbar-static-top" role="navigation">
    
       <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
       </a>
      
       <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
       
			  <li><a href="https://www.themashabrand.com/scripts/Voting/"><i className="fa fa-home"></i> Home Page</a></li>
                            
              <li className="dropdown user user-menu">
                
                <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" className="dropdown-toggle" data-toggle="dropdown">
                  
				 <strong>Languages</strong>	
                </a>
                <ul className="dropdown-menu">
                	<li className="m_2"><a  style={{cursor: 'pointer'}}>English</a></li><li className="m_2"><a style={{cursor: 'pointer'}}>Spanish</a></li>        		</ul>
              </li>
                         
              <li className="dropdown user user-menu">
                
                <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" className="dropdown-toggle" data-toggle="dropdown">
                  
            	                  <img src={person} className="user-image" alt="User Image"/>
                
                  
                  <span className="hidden-xs">Admin</span>
                </a>
                <ul className="dropdown-menu">
						<li className="dropdown-menu-header text-center">
							<strong>Settings</strong>						
						</li>
						<li className="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/settings/site"><i className="fa fa-cogs"></i> Settings</a></li>
						<li className="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/profile"><i className="fa fa-user"></i> Profile</a></li>
						<li className="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/logout"><i className="fa fa-lock"></i> Logout</a></li>	
        		</ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
         
      
        </div>
    )
}
