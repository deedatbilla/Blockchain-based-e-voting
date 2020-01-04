import React from "react";
import DetailWidget from './DetailWidget'
export default function NewElectionForm() {
  return (
    <div>
      <div className="content-wrapper" style={{ minHeight: "475px" }}>
        <section className="content">
<DetailWidget prezname="Elon Musk" prezparty="SpaceX"/>
          <div className="row">
           
          <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Add a presidential candidate</h3>
                </div>

                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Candidate Fullname</label>
                      <input
                        type="text"
                        name="prezname"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter candidate name "
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Party Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="prezparty"
                        placeholder="Enter party name"
                      />
                    </div>

                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

           
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Add a parliamentary candidate</h3>
                </div>

                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Candidate Fullname</label>
                      <input
                        type="text"
                        name="parlname"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter candidate name "
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Party Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="parlparty"
                        placeholder="Enter party name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">District</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="district"
                        placeholder="Enter candidate district"
                      />
                    </div>

                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </section>
      </div>
    </div>
  );
}
