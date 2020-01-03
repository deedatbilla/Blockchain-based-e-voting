import React from 'react'

export default function Summary() {
    return (
        <div>
             <div classNameName="content-wrapper" style={{minHeight: '475px'}}>
        
        <section classNameName="content-header">
          <h1>Dashboard</h1>
        </section>

        
        <section classNameName="content">
          
          
          <div classNameName="row">
            <div classNameName="col-md-3 col-sm-6 col-xs-12">
              <div classNameName="info-box">
                <span classNameName="info-box-icon bg-aqua"><i classNameName="fa fa-globe"></i></span>
                <div classNameName="info-box-content">
                  <span classNameName="info-box-text">Parties</span>
                  <span classNameName="info-box-number">
                    9	
                    </span>
                </div>
              </div>
            </div>

            
            <div classNameName="clearfix visible-sm-block"></div>
            
            <div classNameName="col-md-3 col-sm-6 col-xs-12">
              <div classNameName="info-box">
                <span classNameName="info-box-icon bg-aqua"><i classNameName="fa fa-money"></i></span>
                <div classNameName="info-box-content">
                  <span classNameName="info-box-text">Positions</span>
                  <span classNameName="info-box-number">
                    21	
                    </span>
                </div>
              </div>
            </div>
            
            <div classNameName="col-md-3 col-sm-6 col-xs-12">
              <div classNameName="info-box">
                <span classNameName="info-box-icon bg-aqua"><i classNameName="fa fa-users"></i></span>
                <div classNameName="info-box-content">
                  <span classNameName="info-box-text">Candidates</span>
                  <span classNameName="info-box-number">
                    17	
                    </span>
                </div>
              </div>
            </div>
            
            <div classNameName="col-md-3 col-sm-6 col-xs-12">
              <div classNameName="info-box">
                <span classNameName="info-box-icon bg-aqua"><i classNameName="fa fa-align-left"></i></span>
                <div classNameName="info-box-content">
                  <span classNameName="info-box-text">Voters</span>
                  <span classNameName="info-box-number">
                    20	
                    </span>
                </div>
              </div>
            </div>

          </div>
          

          {/* chart */}

          <div className="col-md-12">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Monthly Recap Report</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <div className="btn-group">
                  <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-wrench"></i></button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            
            <div className="box-body">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                  </p>

                  <div className="chart">
                   
                    <canvas id="salesChart" style={{height: '180px'}}></canvas>
                  </div>
              
                </div>
              
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>

                  <div className="progress-group">
                    <span className="progress-text">Add Products to Cart</span>
                    <span className="progress-number"><b>160</b>/200</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-aqua" style={{width: '80%'}}></div>
                    </div>
                  </div>
               
                  <div className="progress-group">
                    <span className="progress-text">Complete Purchase</span>
                    <span className="progress-number"><b>310</b>/400</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-red" style={{width: '80%'}}></div>
                    </div>
                  </div>
                 
                  <div className="progress-group">
                    <span className="progress-text">Visit Premium Page</span>
                    <span className="progress-number"><b>480</b>/800</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-green" style={{width: '80%'}}></div>
                    </div>
                  </div>
                 
                  <div className="progress-group">
                    <span className="progress-text">Send Inquiries</span>
                    <span className="progress-number"><b>250</b>/500</span>

                    <div className="progress sm">
                      <div className="progress-bar progress-bar-yellow" style={{width: 80%"></div>
                    </div>
                  </div>
                
                </div>
                
              </div>
              
            </div>
           
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
              
                </div>
            
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                
                </div>
              
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                
                </div>
           
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                 
                </div>
              </div>
              
            </div>
           
          </div>
          
        </div>
          
                    
                </section></div>
              </div>
            
         	
        
    )
}
