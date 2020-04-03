import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import Footer from "./Layouts/Footer";
import {Link} from 'react-router-dom'

class ElectionCategoryPage extends Component {
  render() {
    return (
      <div>
        <Votingpageheader />
        <section class="featured-users">
          <div class="container">
            <div class="row">
              <div class="section-title" style={{paddingTop: "20px"}}>
                <h1 style={{textAlign:"center"}}>Categories </h1>
              </div>
            </div>

            <div class="row">
           
              <div class="col-lg-6">
                <div class="box-home clearfix">
                <Link to = "/presidential"></Link>
                  <img
                    src="./category_files/15172161218080-png.png"
                    alt=""
                    class="img-resonsive"
                  />
                
                  <h3>Presidential Candidates</h3>
                  <p>Candidates : 5</p>
                  
                </div>

              </div>

              

              <div class="col-lg-6">
                <div class="box-home clearfix">
                <Link to = "/parliamentary"></Link>
                  <img
                    src="./category_files/1517253664rd.png"
                    alt=""
                    class="img-resonsive"
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
