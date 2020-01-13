import React from "react";

export default function AddpartyForm() {
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
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      {/* <span className="input-group-addon"><i className="fa fa-info"></i></span> */}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="party name"
                        value=""
                      />
                    </div>
                  </div>

                  <br></br>
                  <div style={{ position: "relative" }}>
                    <a className="btn btn-primary">
                      Choose Image...
                      <input
                        type="file"
                        name="photoimg"
                        id="photoimg"
                        name="file_source"
                        size="40"
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
                      value="9e489bfe03caaccc329eb888a7a8f278"
                    />
                    <button
                      type="submit"
                      name="data"
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
