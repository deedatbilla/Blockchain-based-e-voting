import React from "react";
const districtHeader = <th>District</th>;
var district = "";
const empty = "";
const buttons = (
  <div
    class="btn-group breadcrumb"
    role="group"
    aria-label="Basic example"
  >
    <button
      type="button"
      class="btn btn-secondary mr-2"
      data-toggle="modal"
      data-target="#presidentModal"
    >
      Add Presidential Candidate
    </button>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#parliamentaryModal"
    >
      Add Parliamentary Candidate
    </button>
  </div>
);
export default function CandidatesListTable(props) {
  if (props.isparl) {
    district = <td>{props.district}</td>;
  }
  return (
    <div>
      <section className="content-header mb-2">
        <h1>{props.type}</h1>
        {!props.isparl ? buttons : empty}
      </section>

      <section className="content">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title"> Data Table</h3>
              </div>

              <div className="box-body">
                <table
                  id="example2"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Candidate Name</th>
                      <th>Candidate Party</th>
                      <th>Manifesto</th>
                      {props.isparl ? districtHeader : empty}
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cands.map(data => (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.parlname}</td>
                        <td>{data.parlparty}</td>
                        <td>{data.manifesto}</td>

                    {props.isparl ? (<td>{data.district}</td>) : empty}
                        <td><img src={data.imgURL} width={30} height={30}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
