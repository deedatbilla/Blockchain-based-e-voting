import React from "react";

export default function AddpartyForm(props) {
  return (
    <div className="content-wrapper" style={{ minHeight: "475px" }}>
      <section className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="box box-info">
              <div className="box-header">
                <h3 className="box-title">Add Party</h3>
              </div>
              <div className="box-body">
                <form onSubmit={props.onSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      {/* <span className="input-group-addon"><i className="fa fa-info"></i></span> */}
                      <input
                        type="text"
                        name="partyName"
                        className="form-control"
                        placeholder="party name"
                        onChange={props.onNameChange}
                        value={props.partyName}
                      />
                    </div>
                  </div>

                  <br></br>
                  <div style={{ position: "relative" }}>
                    <a className="btn btn-primary">
                      Choose party image...
                      <input
                        type="file"
                        name="partyImg"
                        required
                        onChange={props.onFileChange}
                      />
                      <input type="hidden" name="image_name" id="image_name" />
                    </a>
                    &nbsp;
                    <span
                      className="label label-info"
                      id="upload-file-info"
                    ></span>
                  </div>
                  <br></br>

                  <div className="box-footer">
                    <input
                      type="hidden"
                      name="token"
                     
                    />

                    {props.loading ? <p>uploading...</p> : null}
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
  );
}
