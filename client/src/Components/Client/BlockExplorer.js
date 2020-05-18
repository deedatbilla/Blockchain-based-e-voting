import React, { Component } from "react";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
import InputDataDecoder from "ethereum-input-data-decoder";
// import { abi } from "../../contracts/ElectionCreation.json";
import { abi } from "./abi.json";
import Votingpageheader from "./Layouts/Votingpageheader";
class BlockExplorer extends Component {
  state = {
    data: [],
    search: "",
  };
  componentDidMount = async () => {
    this.props.setconnection();

    // this.setState({
    //   profile: this.state.profile.concat(...res.data.candidate)
    // })

    // TODO: - this code will be used to build the block explorer
    const decoder = new InputDataDecoder(abi);
    const data = ``;
    const { web3, accounts, contract } = this.props;
    const temp =await web3.eth.getBlock(42)
    const k = await web3.eth.getTransaction(40,0)
    console.log(k);
    var latestBlock = await web3.eth.getBlockNumber();
    // console.log(web3.eth);
    var temparr = [];
    for (var i = 0; i < latestBlock; i++) {
      var block = await web3.eth.getBlock(latestBlock - i);
      var number = block.number;
      var hash = block.hash;
      var time = block.timestamp;
      var to = "34"
      const bl = {
        hash: hash,
        number: number,
        to: to,
      };
      temparr.push(bl);

      //$('tbody').append("<tr><td>" + number + "</td><td>" + hash + "</td><td>" + time + "</td></tr>");
    }
    this.setState({ data: [...temparr] });
    const result = decoder.decodeData(data);
    // console.log(result);
    //   const trx_data={
    //     from : accounts[0],
    //     to: '0x611d853e6099b12c28dC95AEF16665011e59D702',
    //     value:0,
    //     data:"",
    //   }
    // const res=  await web3.eth.sendTransaction(trx_data)
    // console.log(res)
  };
  searchFunction = (e) => {
    this.setState({ search: e.target.value });
  };
  default() {
    return this.state.data.map((data) => (
      <tr key={data.number}>
        <td>{data.hash.substring(0,20)}...</td>
        <td>{data.number}</td>
        <td>{data.to}...</td>
        <td>1</td>
      </tr>
    ));
  }

  searched() {
    var newtable = [];
    const { data, search } = this.state;

    data.forEach((element) => {
      if (element.hash.includes(search)) {
        newtable.push(element);
      }
    });

    if (newtable.length > 0) {
      return newtable.map((data) => (
        <tr>
          <td>{data.hash.substring(0,20)}...</td>
          <td>{data.number}</td>
          <td>{data.to}...</td>>
          <td>1</td>
        </tr>
      ));
    }
    // else(console.log("sdfsd"))
  }
  render() {
    return (
      <div>
        {" "}
        <Votingpageheader history={this.props.history} />{" "}
        <section className="featured-users">
          <div className="container">
            <div className="row">
              <div className="section-title" style={{ paddingTop: "20px" }}>
                <h1 className="section-title">Block Explorer </h1>
              </div>
              <div className="container">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  onChange={this.searchFunction}
                  placeholder="Search transaction hash"
                />
                <table className="table" id="explorerTable">
                  <thead>
                    <tr>
                      <th>Transaction id</th>
                      <th>Block number</th>
                      <th>To</th>

                      <th>Vote value</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.search !== ""
                      ? this.searched()
                      : this.default()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  accounts: state.connect.accounts,
  web3: state.connect.web3,
  contract: state.connect.contract,
});
export default connect(mapStateToProps, { setconnection })(BlockExplorer);
