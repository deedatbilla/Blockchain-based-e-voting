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
		 <a className="navbar-brand" href="">Blockchain Voting</a>
		</div>
		<div className="navbar-left">
		 <div className="collapse navbar-collapse" id="navbar-collapse">
		  <ul className="nav navbar-nav">
		   <li className=""><a href="">Home</a></li>
		   
		  </ul>
		 </div>
		</div>
		
       </div>
      </nav>
     </header>
        </div>
    )
}
