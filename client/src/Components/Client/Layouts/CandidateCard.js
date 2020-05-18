import React, { Component } from "react";
import profile from "../../../assets/151713187001792.jpg";
import axios from "axios";
import { host } from "../../../config/config";
class CandidateCard extends Component {
  state = {
    Presidential: []
  };

  async componentDidMount() {

    const { contract, count } = this.props;
    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getPresidentialCandidates(0, i)
        .call();

      this.setState(state => {
        const Presidential = state.Presidential.concat(response);
        return {
          Presidential
        };
      });
    }

    console.log(this.state.Presidential);
  }
  vote = async (id,candidateAddress) => {
    const { accounts, contract, count,web3 } = this.props;

    // // candidates arrays.
   const trx= await contract.methods.voteForPresident(id, 0).send({ from: accounts[0] });
   const trx_data={
    from : this.props.accounts[0],
    to: candidateAddress,
    value:web3.utils.toWei("0.005", "ether"),
    data:"",
  }
const res=  await web3.eth.sendTransaction(trx_data)
   //will be changed in future. trx data must be stored in the database not in localstorage.
   //this will be used temporarily for project defense purpose.
   //the plan now is to delete the trx data once voter logs out. if they decide to log back in the trx data will
   // be lost
   localStorage.setItem("prestrx",JSON.stringify(trx))
    // // Get the value from the contract to prove it worked.
    const response = await contract.methods
      .getPresidentialVoteCount(id, 0)
      .call();
      

    this.setState({ Presidential: [] });

    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getPresidentialCandidates(0, i)
        .call();
      this.setState(state => {
        const Presidential = state.Presidential.concat(response);
        return {
          Presidential
        };
      });
    }
    this.props.history.push('/')
    //console.log(response);
  };

  render() {
    return (
      <div className="row">
        {this.state.Presidential.map(data => (
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
                        left: "7px"
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
                  <p>
                    {" "}
                    <span>
                      <span className="text-muted">Running to Be: </span>
                      <span className="text-mint">President</span>{" "}
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
                      textAlign: "center"
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
                  onClick={this.vote.bind(this, data.id,data.cand_addr)}
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
export default CandidateCard;
