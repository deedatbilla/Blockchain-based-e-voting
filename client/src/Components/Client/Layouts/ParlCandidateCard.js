import React, { Component } from "react";
import profile from "../../../assets/151713187001792.jpg";
import axios from "axios";
import { host } from "../../../config/config";
class ParlCandidateCard extends Component {
  state = {
    Parliamentary: [],
  };

  async componentDidMount() {
    const { contract, count } = this.props;
    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getParliamentaryCandidates(0, i)
        .call();

      this.setState((state) => {
        const Parliamentary = state.Parliamentary.concat(response);
        return {
          Parliamentary,
        };
      });
    }

    console.log(this.state.Parliamentary);
  }
  vote = async (id) => {
    const { accounts, contract, count } = this.props;
    const data = JSON.parse(localStorage.getItem("authdata"));
    const district = data.user.constituency;

    // // candidates arrays.
    const trx = await contract.methods
      .voteForParliament(id, 0, district)
      .send({ from: accounts[0] });
    //will be changed in future. trx data must be stored in the database not in localstorage.
    //this will be used temporarily for project defense purpose.
    //the plan now is to delete the trx data once voter logs out. if they decide to log back in the trx data will
    // be lost
    localStorage.removeItem("parltrx");
    localStorage.setItem("parltrx", JSON.stringify(trx));
    // // Get the value from the contract to prove it worked.
    const response = await contract.methods
      .getParliamentaryVoteCount(id, 0)
      .call();

    // this.setState({ Parliamentary: [] });

    // for (var i = 1; i <= count; i++) {
    //   const response = await contract.methods
    //     .getParliamentaryVoteCount(id, 0)
    //     .call();
    //   this.setState((state) => {
    //     const Parliamentary = state.Parliamentary.concat(response);
    //     return {
    //       Parliamentary,
    //     };
    //   });
    // }
    this.props.history.push("/");
    //console.log(response);
  };

  render() {
    return (
      <div className="row">
        {" "}
        {this.state.Parliamentary.map((data) => (
          <div className="col-lg-4">
            <span id="comment474877446628"></span>

            <div className="text-center card-box">
              <div className="clearfix"></div>
              <div className="member-card">
                <div className="thumb-xl member-thumb m-b-10 center-block ">
                  <div className="container">
                    <img
                      width={283}
                      height={283}
                      src={data.imgURL}
                      className="img-circle img-responsive img-fluid img-thumbnail  rounded-circle "
                      alt="profile-image"
                    />

                    <img
                      width={30}
                      height={30}
                      src={data.partyImg}
                      className="img-circle img-responsive img-fluid img-thumbnail  rounded-circle "
                      alt="profile-image"
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "7px",
                      }}
                    />
                  </div>
                  <i
                    className="mdi mdi-star-circle member-star text-success"
                    title="verified user"
                  ></i>
                </div>

                <div className="">
                  <h4 className="m-b-5">{data.name}</h4>
                  <p className="text-danger">
                    <i className="fa fa-thumbs-o-up"></i> {data.count}
                  </p>
                  <p className="text-mint">
                    <span className="text-mint"> {data.party}</span>
                  </p>
                  <p className="text-mint">
                    <span className="text-muted">constituency: </span>
                    <span className="text-mint"> {data.district}</span>
                  </p>
                  <p>
                    {" "}
                    <span>
                      <span className="text-muted">Running to Be: </span>
                      <span className="text-mint">
                        Parliamentary candidate
                      </span>{" "}
                    </span>
                  </p>
                </div>

                <p>
                  <span
                    style={{
                      fontFamily: "&quot;Abhaya Libre&quot, serif",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontVariantLigatures: "normal",
                      fontVariantCaps: "normal",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    {data.manifesto.substring(0, 200) + " ..."}
                  </span>
                </p>
                <br />
                <a href="" className="kafe-btn kafe-btn-mint-small">
                  <i className="fa fa-user-secret" aria-hidden="true"></i> View
                  Manifesto
                </a>
                <a
                  href="#"
                  className="kafe-btn kafe-btn-danger-small"
                  onClick={this.vote.bind(this, data.id)}
                >
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> vote
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ParlCandidateCard;
