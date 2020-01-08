import React from 'react'

export default function Header(props) {
    return (
        <div>
         <header className="tr-header">
      <nav className="navbar navbar-default">
       <div className="container">
	    <div className="navbar-header">
		 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
		  <span className="sr-only">Toggle navigation</span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		 </button>
		 <a className="navbar-brand" href="https://www.themashabrand.com/scripts/Voting/">Blockchain Voting</a>
		</div>
		<div className="navbar-left">
		 <div className="collapse navbar-collapse" id="navbar-collapse">
		  <ul className="nav navbar-nav">
		   <li className=""><a href="https://www.themashabrand.com/scripts/Voting/">Home</a></li>
		   <li className=""><a href="https://www.themashabrand.com/scripts/Voting//how">How it works</a></li>
		  </ul>
		 </div>
		</div>
		<div className="navbar-right">  

		 <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                
                <a href="https://www.themashabrand.com/scripts/Voting/admin/login#" className="dropdown-toggle" data-toggle="dropdown">
                
                 
                  <span className="hidden-xs">
                  	Languages                  </span>
                </a>
                <ul className="dropdown-menu">
                	<li className="m_2"><a  style={{cursor: "pointer",}}>English</a></li><li className="m_2"><a  style={{cursor: "pointer",}}>Spanish</a></li>	
        		</ul>
              </li>
           </ul>  
		 	
		 	
		 <ul className="nav navbar-nav">
		 	
		  <li><i className="fa fa-user"></i></li>
		  <li className=""><a href="https://www.themashabrand.com/scripts/Voting/login">Login</a></li>
		 </ul>
		 <a href="https://www.themashabrand.com/scripts/Voting/register" className="kafe-btn kafe-btn-mint-small">
		 	Register		 	as		 	a		 	Voter		 </a>
		  		 		
		</div>
       </div>
      </nav>
     </header>
        </div>
    )
}
