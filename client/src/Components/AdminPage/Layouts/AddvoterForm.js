import React from 'react'

export default function AddvoterForm() {
    return (
        <div>
          
        <section class="content">	 	
		 <div class="row">	
		 	
		 <div class="col-lg-12">	
		 	
		  		  
	      	
		  		  
          </div>
           
		 <div class="col-lg-12">
		 
		 
              <div class="box box-info">
                <div class="box-header">
                  <h3 class="box-title">Add Position</h3>
                </div>
                <div class="box-body">
                 <form role="form" method="post" id="addform"> 
                  
                  <div class="form-group">	
				    <label>Organization</label>
                   <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-pencil-square"></i></span>
					<select name="organizationid" type="text" class="form-control">
					 <option value = "214407771051">The Masha Brand Company</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "148404653372">Harvard Campus Election</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "191158759771">Republican National Committee</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "398673516259">Democratic National Committee</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "357540792223">Women's March</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "340866181644">Grammy Awards</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "162452339739">Oscars Awards</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "283787111660">Book Club</option><br />
<b>Notice</b>:  Undefined variable: categoryname in <b>/home/fluffsco/public_html/scripts/Voting/source/admin/addposition.php</b> on line <b>142</b><br />
<option value = "171039999680">Women's Club</option>	
					</select>
                   </div>
                  </div>
                  
                  <div class="form-group">	
				    <label>Name</label>
                   <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-info"></i></span>
                    <input type="text" name="name" class="form-control" placeholder="Name" value=""/>
                   </div>
                  </div>
                           
                  <div class="box-footer">
                    <input type="hidden" name="token" value="d7b8231146fa14ecb40b27fe9a0fbd51" />
                    <button type="submit" name="data" class="btn btn-primary full-width">Submit</button>
                  </div>
                 </form> 
                </div>
              </div>
		 
		</div>
		
        
			 
	    </div>		  		  
	   </section>
        </div>
    )
}
