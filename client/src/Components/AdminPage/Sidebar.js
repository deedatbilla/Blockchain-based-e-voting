import React from 'react'

export default function Sidebar() {
    return (
        <div>
             <aside class="main-sidebar">


<section class="sidebar">

  
  <div class="user-panel">
    <div class="pull-left image">
      <img src="./Admin_files/default.png" class="img-circle" alt="User Image"/>
    </div>
    <div class="pull-left info">
      <p>Admin</p>
      
      <a href="https://www.themashabrand.com/scripts/Voting/admin/profile"><i class="fa fa-circle text-success"></i> Online</a>
    </div>
  </div>


  
  <ul class="sidebar-menu">
    <li class="header">Header</li>
    
    <li class=" active">
        <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
    </li>
    <li class="treeview">
      <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#"><i class="fa fa-users"></i> <span>Voters</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/voterlist">Voters List</a></li>
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/addvoter">Add Voter</a></li>
      </ul>
    </li>   
    <li class="treeview">
      <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#"><i class="fa fa-align-left"></i> <span>Organizations</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/organizationlist">Organization List</a></li>
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/addorganization">Add Organization</a></li>
      </ul>
    </li> 
    <li class="treeview">
      <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#"><i class="fa fa-align-left"></i> <span>Positions</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/positionlist">Position List</a></li>
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/addposition">Add Position</a></li>
      </ul>
    </li> 
    <li class="treeview">
      <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#"><i class="fa fa-users"></i> <span>Nominees</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/nomineelist">Nominees List</a></li>
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/addnominee">Add Nominee</a></li>
      </ul>
    </li>  
    <li class="treeview">
      <a href="https://www.themashabrand.com/scripts/Voting/admin/dashboard#"><i class="fa fa-files-o"></i> <span>Language</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/languagelist">Language List</a></li>
        <li><a href="https://www.themashabrand.com/scripts/Voting/admin/addlanguage">Add Language</a></li>
      </ul>
    </li>        
    <li class="">
        <a href="https://www.themashabrand.com/scripts/Voting/admin/settings/site"><i class="fa fa-cogs"></i> <span>Settings</span></a>
    </li>   
  
  </ul>
</section>

</aside> 
 
        </div>
    )
}
