import React, { Component } from 'react'

export default class CandidateCard extends Component {
    render() {
        return (
            <div>
                 <div className="col-lg-4">	
	    <span id="comment474877446628"></span>
				  
         <div className="text-center card-box">
		  <div className="clearfix"></div>
		  <div className="member-card">
		   <div className="thumb-xl member-thumb m-b-10 center-block">
		    <img src="./voting page_files/151713187001792.jpg" className="img-circle img-thumbnail" alt="profile-image"/>
			<i className="mdi mdi-star-circle member-star text-success" title="verified user"></i>
		   </div>

		   <div className="">
			<h4 className="m-b-5">Nominee One</h4>
			<p className="text-danger"><i className="fa fa-thumbs-o-up"></i> 3 Votes</p> 
			<p className="text-mint"><span className="text-mint"> The Masha Brand Company</span></p>  
			<p> <span><span className="text-muted">Running to Be: </span><span className="text-mint">President</span> </span></p>
		   </div>

			<p><span style={{fontFamily: '&quot;Abhaya Libre&quot, serif', fontSize: '15px', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: '400', textAlign: 'center'}}>Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</span></p><br/>
		   <a href="https://www.themashabrand.com/scripts/Voting/manifesto/474877446628" className="kafe-btn kafe-btn-mint-small"><i className="fa fa-user-secret" aria-hidden="true"></i> View Manifesto</a>
		   <a  className="kafe-btn kafe-btn-danger-small"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> vote</a>
		  </div>
          
		 </div>
	   </div>
    
            </div>
        )
    }
}
