import React from "react";

export default function DetailWidget(props) {
  return (
    <div>
      <div className="col-md-3">
        <div className="box box-success box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">{props.prezname}</h3>

            <div className="box-tools pull-right">
              <button
                type="button"
                className="btn btn-box-tool"
                data-widget="remove"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>

          <div className="box-body">{props.prezparty}</div>
        </div>
      </div>
    </div>
  );
}
