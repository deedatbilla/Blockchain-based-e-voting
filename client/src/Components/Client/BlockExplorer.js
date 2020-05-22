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
  convertTimestamp=(time)=> {
    var d = new Date(time * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;
        if (hh > 12) {
          h = hh - 12;
          ampm = 'PM';
      } else if (hh === 12) {
          h = 12;
          ampm = 'PM';
      } else if (hh == 0) {
          h = 12;
      }
      // ie: 2014-03-24, 3:00 PM
    var  time1 = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
      return time1;
      }
  componentDidMount = async () => {
    this.props.setconnection();

    // this.setState({
    //   profile: this.state.profile.concat(...res.data.candidate)
    // })

    // TODO: - this code will be used to build the block explorer
    const decoder = new InputDataDecoder(abi);
    const data = ``;
    const { web3, accounts, contract } = this.props;
    
    
    const temp =await web3.eth.getBlock(2)
    const k = await web3.eth.getTransaction(temp)
   console.log(temp.transactions);
    var latestBlock = await web3.eth.getBlockNumber();
    // console.log(web3.eth);
    var temparr = [];
    for (var i = 0; i < latestBlock; i++) {
      var block = await web3.eth.getBlock(latestBlock - i);
      var number = block.number;
      var hash = block.transactions[ 0];
      var time = this.convertTimestamp(block.timestamp);
      var to = "34"
      const bl = {
        hash: hash,
        number: number,
        time:time
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
        <td>{data.hash}</td>
        <td>{data.number}</td>
        <td>{data.time}</td>
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
          <td>{data.hash}</td>
          <td>{data.number}</td>
          <td>{data.time}</td>>
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
                      <th>Timestamp</th>

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
