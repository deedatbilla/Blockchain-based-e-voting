import React from "react";
import { Chart } from "react-google-charts";

export default function Summary(props) {
  var preztotal = 0;
  props.prezstatistics.forEach(function(value) {
    preztotal += Number(value.count);
  });

  var parltotal = 0;
  props.parlstatistics.forEach(function(value) {
    parltotal += Number(value.count);
  });

  return (
    <div>
      <div className="content-wrapper" style={{ minHeight: "475px" }}>
        <section className="content-header">
          <h1>Dashboard</h1>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-globe"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Parties</span>
                  <span className="info-box-number">{props.partycount}</span>
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-users"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Presidential Candidates</span>
                  <span className="info-box-number">
                    {props.prezstatistics.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-users"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Parliamentary Candidates</span>
                  <span className="info-box-number">
                    {props.parlstatistics.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-align-left"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Voters</span>
                  <span className="info-box-number">{props.votercount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* chart */}
          <div className="row">
            {/* chart */}

            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">
                    Presidential election Statistics
                  </h3>

                  <div className="box-tools pull-right">
                    <button
                      type="button"
                      className="btn btn-box-tool"
                      data-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-box-tool dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-wrench"></i>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="#">Action</a>
                        </li>
                        <li>
                          <a href="#">Another action</a>
                        </li>
                        <li>
                          <a href="#">Something else here</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-box-tool"
                      data-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>

                <div className="box-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="chart">
                        <div className={"my-pretty-chart-container mt-3"}>
                          <Chart
                            height={"180%"}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                              [
                                "Results",
                                ...props.prezstatistics.map(data => data.party)
                              ],
                              [
                                "2014",
                                ...props.prezstatistics.map(data => data.count)
                              ]
                            ]}
                            // For tests
                            rootProps={{ "data-testid": "2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <p className="text-center">
                        <strong> Election Statistics</strong>
                      </p>

                      {props.prezstatistics.map(data => (
                        <div className="progress-group">
                          <span className="progress-text">{data.party}</span>
                          <span className="progress-number">
                            <b>{data.count}</b>/{preztotal}
                          </span>

                          <div className="progress sm">
                            <div
                              className="progress-bar btn btn-success"
                              style={{ width: (data.count / preztotal) * 100 + "%" }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="row">
            {/* chart */}

            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">
                    Parliamentary election Statistics
                  </h3>

                  <div className="box-tools pull-right">
                    <button
                      type="button"
                      className="btn btn-box-tool"
                      data-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-box-tool dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-wrench"></i>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="#">Action</a>
                        </li>
                        <li>
                          <a href="#">Another action</a>
                        </li>
                        <li>
                          <a href="#">Something else here</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">Separated link</a>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-box-tool"
                      data-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>

                <div className="box-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="chart">
                        <div className={"my-pretty-chart-container mt-3"}>
                          <Chart
                            height={"180%"}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                              [
                                "Results",
                                ...props.parlstatistics.map(data => data.party)
                              ],
                              [
                                "2014",
                                ...props.parlstatistics.map(data => data.count)
                              ]
                            ]}
                            // For tests
                            rootProps={{ "data-testid": "2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <p className="text-center">
                        <strong> Election Statistics</strong>
                      </p>

                      {props.parlstatistics.map(data => (
                        <div className="progress-group">
                          <span className="progress-text">{data.name} for {data.party} from {data.district}</span>
                          <span className="progress-number">
                            <b>{data.count}</b>/{parltotal}
                          </span>

                          <div className="progress sm">
                            <div
                              className="progress-bar progress-bar-aqua"
                              style={{ width: (data.count / parltotal) * 100 + "%" }}
                            ></div>
                          </div>
                        </div>
                      ))}
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
