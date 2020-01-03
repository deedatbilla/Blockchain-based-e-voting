import React from 'react'

export default function Voterlist() {
    return (
        <div>
             <div className="content-wrapper" style={{minHeight: '475px'}}>
        
        <section className="content-header">
        </section>

        
        <section className="content">	 	
 
		 <div className="row">	
		 	<div className="col-md-12">
		 		
		 		<div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title"> Voter List</h3>
                </div>
                <div className="box-body">
                 <div className="table-responsive">
                  <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-6"><div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="example1"/></label></div></div></div><div className="row"><div className="col-sm-12"><table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                    <thead>
                      <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Image: activate to sort column descending" style={{width: '117px'}}>Image</th><th className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style={{width: '199px'}}>Name</th><th className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" style={{width: '244px'}}>Email</th><th className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Username: activate to sort column ascending" style={{width: '194px'}}>Username</th><th className="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style={{width: '119px'}}>Action</th></tr>
                    </thead>
                    <tbody>
				                        <tr id="tr454243422562" role="row" className="odd"><td className="sorting_1"><img src="./voterlist_files/1515501792.jpg" width="50" height="30"/></td><td>Avatar One</td><td>avatar1@gmail.com</td><td>AvatarOne</td><td>
					    
					      <a href="https://www.themashabrand.com/scripts/Voting/admin/editvoter/profile/454243422562" className="btn btn-success btn-xs" data-toggle="tooltip" title="Edit"><span className="fa fa-edit"></span></a>
					      
	 <a onclick="delete_the(454243422562)" className="btn btn-danger btn-xs" data-toggle="tooltip" title="Delete">
	 <span className="fa fa-trash"></span></a>
					      </td></tr></tbody>
                    <tfoot>
                      <tr><th rowspan="1" colspan="1">Image</th><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Email</th><th rowspan="1" colspan="1">Username</th><th rowspan="1" colspan="1">Action</th></tr>
                    </tfoot>
                  </table></div></div><div className="row"><div className="col-sm-5"><div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 20 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="example1_previous"><a href="https://www.themashabrand.com/scripts/Voting/admin/voterlist#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li><li className="paginate_button active"><a href="https://www.themashabrand.com/scripts/Voting/admin/voterlist#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li className="paginate_button "><a href="https://www.themashabrand.com/scripts/Voting/admin/voterlist#" aria-controls="example1" data-dt-idx="2" tabindex="0">2</a></li><li className="paginate_button next" id="example1_next"><a href="https://www.themashabrand.com/scripts/Voting/admin/voterlist#" aria-controls="example1" data-dt-idx="3" tabindex="0">Next</a></li></ul></div></div></div></div>
                  </div>
                </div>
              </div>	
			  
	         </div>
		 </div> 
	    	  		  
	   </section>
      </div>
       
        </div>
    )
}
