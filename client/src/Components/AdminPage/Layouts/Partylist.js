import React from "react";

export default function Partylist(props) {
  return (
    <div>
      <div className="content-wrapper" style={{ minHeight: "475px" }}>
        <section className="content-header"></section>

        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title"> Party List</h3>
                </div>
                <div className="box-body">
                  <div className="table-responsive">
                    <div
                      id="example1_wrapper"
                      className="dataTables_wrapper form-inline dt-bootstrap"
                    >
                      
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="example2"
                            className="table table-bordered table-hover"
                          >
                            <thead class="thead-dark">
                              <tr>
                                <th> Voter ID</th>
                                <th>Voter Name</th>
                                <th>Voter Email</th>
                                <th>Constituency</th>
                                <th>Action</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {props.voters.map(data => (
                                <tr>
                                  <td>{data.voter_id}</td>
                                  <td>{data.name}</td>
                                  <td>{data.email}</td>
                                  <td>{data.constituency}</td>
                                  <td>
                                    <a href="#" className="btn btn-primary">
                                      {" "}
                                      Edit
                                    </a>
                                  </td>
                                  <td>
                                    <a href="#" className="btn btn-danger">
                                      Delete
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
