import React, { Component } from "react";
import DetailWidget from "./presDetailWidget";
import parlDetailWidget from "./parlDetailWidget";

class NewElectionForm extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper" style={{ minHeight: "475px" }}>
          <section className="content">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Date</label>
                  <div className="cal-icon">
                    <input
                      className="form-control J_E_dates"
                      type="text"
                      name="report_date"
                      value=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name="report_title"
                    value=""
                  />
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Date</label>
                  <div className="cal-icon">
                    <input
                      className="form-control J_E_dates"
                      type="text"
                      name="report_date"
                      value=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name="report_title"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Date</label>
                  <div className="cal-icon">
                    <input
                      className="form-control J_E_dates"
                      type="text"
                      name="report_date"
                      value=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Report Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name="report_title"
                    value=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default NewElectionForm;
