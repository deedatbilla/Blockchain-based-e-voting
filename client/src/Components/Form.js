import React from 'react'

export default function Form(props) {
    return (
        <div>
            <section class="banner-login">
            <div class="row">
	   
       <main class="main main-signup col-lg-12">
        <div class="col-lg-6 col-lg-offset-3 text-center">

        <div class="form-sign">
		   <form method="post">
		    <div class="form-head">
			 <h3>{props.name}</h3>
			</div>
            <div class="form-body">            	
            	
			 <div class="form-row">
			  <div class="form-controls">
			   <input name="email" placeholder="Email" class="field" type="text"/>
			  </div>
			 </div>

			 <div class="form-row">
			  <div class="form-controls">
			   <input name="password" placeholder="Password" class="field" type="password"/>
			  </div>
			 </div>
			 
			 <div class="form-row">
			  <div class="material-switch pull-left">
			   <input id="someSwitchOptionSuccess" name="remember" type="checkbox"/>
			   <label for="someSwitchOptionSuccess" class="label-success"></label>
			   <span>Remember Me</span>
			  </div>
			 </div>
			 
		    </div>

			<div class="form-foot">
			 <div class="form-actions">					
              <input type="hidden" name="token" value="fb9f639da053348c4ee2bf04f2391474"/>
			  <input value="Login" class="kafe-btn kafe-btn-default full-width" type="submit"/>
			 </div>
             <div class="form-head">
			 </div>
			</div>
		   </form>
		   
		  </div>
           
            </div>
            </main>
            </div>
	 
     </section>  
        </div>
    )
}
