import React, { Component } from "react";



class Form extends Component {
  

  render() {
    return (
      <div>
        <section className="banner-login">
          <div className="row">
            <main className="main main-signup col-lg-12">
              <div className="col-lg-6 col-lg-offset-3 text-center">
                <div className="form-sign">
                  <form onSubmit={this.props.onSubmit}>
                    <div className="form-head">
                      <h3>{this.props.name}</h3>
                    </div>
                    <div className="form-body">
                      <div className="form-row">
                        <div className="form-controls">
                          <input
                            name="text"
                            placeholder="ID number"
                            required
                            onChange={this.props.onChange}
                            name="IDnumber"
                            className="field"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-controls">
                          <input
                            name="password"
                            required
                            onChange={this.props.onChange}
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
                          type="hidden"
                          name="token"
                          value="fb9f639da053348c4ee2bf04f2391474"
                        />
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
      </div>
    );
  }
}


export default Form
