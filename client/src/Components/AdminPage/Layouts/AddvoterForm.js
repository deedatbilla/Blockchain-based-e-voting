import React from "react";

export default function AddvoterForm(props) {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header"></section>

        <section className="content">
          <div className="row">
            <div className="col-lg-12"></div>

            <div className="col-lg-12">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">Add Voter</h3>
                </div>
                <div className="box-body">
                  <form onSubmit={props.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="voter_id"
                        className="form-control"
                        placeholder="ID number"
                        
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select className="form-control" onChange={props.onChange} name="constituency">
                        <option>---Select Constituency---</option>
                        <option>Awutu Afutu</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Pin"
                        onChange={props.onChange}
                      />
                    </div>

                    <br></br>

                    <br></br>

                    <div className="box-footer">
                      
                      <button
                        type="submit"
                        
                        className="btn btn-primary full-width"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
