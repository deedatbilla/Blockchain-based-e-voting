import React, { Component } from "react";
import Votingpageheader from "./Layouts/Votingpageheader";
import CandidateCard from './Layouts/CandidateCard'

class PresidentialVotingPage extends Component {
  render() {
    return (
      <div>
        <Votingpageheader />
        <div className="featured-users">
          <div className="container">
            <div className="row">
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1>Presidential Candidates</h1>
              </div>
              <CandidateCard/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PresidentialVotingPage;
