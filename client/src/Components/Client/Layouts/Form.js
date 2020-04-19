import React from 'react'

 function Form(props){
  

  
    return (
     
        <section className="banner-login">
          <div className="row">
            <main className="main main-signup col-lg-12">
              <div className="col-lg-6 col-lg-offset-3 text-center">
                <div className="form-sign">
                  <form onSubmit={props.onSubmit}>
                    <div className="form-head">
                      <h3>{props.FormName}</h3>
                    </div>
                    <div className="form-body">
                      <div className="form-row col-sm-6">
                        <div className="form-controls">
                          <input
                            name="text"
                            placeholder={props.placeholder}
                            required
                            onChange={props.onChange}
                            name={props.name}
                            className="field"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-controls">
                          <input
                            name="password"
                            required
                            onChange={props.onChange}
                            placeholder="Password"
                            name="password"
                            className="field"
                            type="password"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="material-switch pull-left">
                          <input
                            id="someSwitchOptionSuccess"
                            name="remember"
                            type="checkbox"
                          />
                          <label
                            htmlFor="someSwitchOptionSuccess"
                            className="label-success"
                          ></label>
                          <span>Remember Me</span>
                        </div>
                      </div>
                    </div>

                    <div className="form-foot">
                      <div className="form-actions">
                        
                        <input
                          value="Login"
                          className="kafe-btn kafe-btn-default full-width"
                          type="submit"
                        />
                      </div>
                      <div className="form-head"></div>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </section>
    
    );
  }



export default Form
