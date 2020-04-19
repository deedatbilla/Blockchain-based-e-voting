import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import Footer from "./Layouts/Footer";
import {Link} from 'react-router-dom'

class ElectionCategoryPage extends Component {
  render() {
    return (
      <div>
        <Votingpageheader />
        <section className="featured-users">
          <div className="container">
            <div className="row">
              <div className="section-title" style={{paddingTop: "20px"}}>
                <h1 className="section-title">Ballots </h1>
              </div>
            </div>

            <div className="row">
           
              <div className="col-lg-6">
                <div className="box-home clearfix">
                <Link to = "/presidential"></Link>
                  <img
                    src="./category_files/15172161218080-png.png"
                    alt=""
                    className="img-resonsive"
                  />
                
                  <h3>Presidential Candidates</h3>
                  <p>Candidates : 5</p>
                  
                </div>

              </div>

              

              <div className="col-lg-6">
                <div className="box-home clearfix">
                <Link to = "/parliamentary"></Link>
                  <img
                    src="./category_files/1517253664rd.png"
                    alt=""
                    className="img-resonsive"
                  />
                  <h3>Parliamentary Candidates</h3>
                  <p>Candidates : 3</p>
                </div>
              </div>

             
            </div>
           </div>
        </section>

        <Footer/>
      </div>
    );
  }
}
export default ElectionCategoryPage;
