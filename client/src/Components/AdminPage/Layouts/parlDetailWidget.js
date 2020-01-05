import React, { Component } from 'react'

 class parlDetailWidget extends Component {
    render() {
        return (
            <div>
                <div className="row">
                  <div className="col-md-3">
          <div className="box box-success box-solid">
            <div className="box-header with-border">
    <h3 className="box-title">{this.props.parlname}</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
              
            </div>
            
            <div className="box-body">
              {this.props.parlparty}
            </div>
            
          </div>
          </div>
        </div>
            </div>
        )
    }
}
export default parlDetailWidget