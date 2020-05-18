import React, { Component } from "react";
import AddvoterForm from "./Layouts/AddvoterForm";
import "../../css/Admin/style.css";
import "../../css/Admin/AdminLTE.min.css";
import Sidebar from "./Layouts/Sidebar";
import AdminHeader from "./Layouts/AdminHeader";
import Footer from "./Layouts/Footer";
import { host } from "../../config/config";
import axios from "axios";
import { setconnection } from "../../actions/connectActions";
import { connect } from "react-redux";
class Addvoter extends Component {
  state = {
    name: "",
    voter_id: "",
    email: "",
    constituency: "",
    password: "",
    loading: 0,
  };
  render() {
    onchange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    onsubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: 1 });
      try {
        const { web3 } = this.props;

        const { privateKey, address } = web3.eth.accounts.create();
        const cred = this.state;
        const user_data = {
          ...cred,
          privateKey,
          address,
        };
        this.setState({
          name: "",
          voter_id: "",
          email: "",
          constituency: "",
          password: "",
          loading: 2
        });
        const trx_data={
              from : this.props.accounts[0],
              to: address,
              value:web3.utils.toWei("1.5", "ether"),
              data:"",
            }
          const res=  await web3.eth.sendTransaction(trx_data)
         
        // await web3.eth.sendTransaction({
        //   to: web3.utils.toHex(0x13511be7d04d9529d4c19dbcdb421c1074d714bc),
        //   from: this.props.accounts[0],
        //   value: web3.utils.toHex(web3.utils.toWei(0.5, "ether")),
        //});
        // const response = await axios.post(host + "/users", user_data);
        // 
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <div>
        <div className="skin-green sidebar-mini">
          <div className="wrapper">
            <AdminHeader />
            <Sidebar />
            <AddvoterForm
              onchange={this.onchange}
              onsubmit={this.onsubmit}
              state={this.state}
              loading={this.state.loading}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  web3: state.connect.web3,
  accounts: state.connect.accounts,
});
export default connect(mapStateToProps, { setconnection })(Addvoter);
