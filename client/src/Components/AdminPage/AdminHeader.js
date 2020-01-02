import React from 'react'

export default function AdminHeader() {
    return (
        <div>
             <header class="main-header">
      <a href="https://www.themashabrand.com/scripts/Voting/" class="logo">
      
       <span class="logo-mini"><b><i class="fa fa-user-md"></i></b></span>
       
       <span class="logo-lg"><b>
       	Voting</b></span>
      </a>

     
      <nav class="navbar navbar-static-top" role="navigation">
    
       <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
       </a>
      
       <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
       
			  <li><a href="https://www.themashabrand.com/scripts/Voting/"><i class="fa fa-home"></i> Home Page</a></li>
                            
              <li class="dropdown user user-menu">
                
                <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" class="dropdown-toggle" data-toggle="dropdown">
                  
				 <strong>Languages</strong>	
                </a>
                <ul class="dropdown-menu">
                	<li class="m_2"><a  style={{cursor: 'pointer'}}>English</a></li><li class="m_2"><a style={{cursor: 'pointer'}}>Spanish</a></li>        		</ul>
              </li>
                         
              <li class="dropdown user user-menu">
                
                <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#" class="dropdown-toggle" data-toggle="dropdown">
                  
            	                  <img src="./Admin_files/default.png" class="user-image" alt="User Image"/>
                
                  
                  <span class="hidden-xs">Admin</span>
                </a>
                <ul class="dropdown-menu">
						<li class="dropdown-menu-header text-center">
							<strong>Settings</strong>						
						</li>
						<li class="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/settings/site"><i class="fa fa-cogs"></i> Settings</a></li>
						<li class="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/profile"><i class="fa fa-user"></i> Profile</a></li>
						<li class="m_2"><a href="https://www.themashabrand.com/scripts/Voting/admin/logout"><i class="fa fa-lock"></i> Logout</a></li>	
        		</ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
         
      
        </div>
    )
}
