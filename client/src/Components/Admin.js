import React, { Component } from 'react'
 class Admin extends Component {
     state ={
         names:[],
         temp:'',
     }
     onSubmit= async(e)=> {
        e.preventDefault();
        const { accounts, contract,web3 } = this.props.init;
        const {names}=this.state
        await contract.methods.addCandidates(names,5).send({ from: accounts[0] });
        const response = await contract.methods.getallCandidates().call();
        console.log(response)
        this.setState({temp:''})
     }
     AddCandidate=(e)=>{
         this.setState(state=>{
         const names = state.names.concat(state.temp);
                return {
                         names,
                         temp: ''
                    };
          })
     }
     onChange=(e)=>this.setState({[e.target.name]:e.target.value})
    render() {
        const {names,temp}=this.state
      
        return (
            <div className="container ">
                

                <div className="nav">
                   <ul>
        {this.state.names.map(name=>(<li key={name}>{name}</li>))}
                   </ul>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" required onChange={this.onChange} value={temp}  placeholder="Candidate name" name="temp" className="form-control"/>
                    </div>

                    <div className="form-group">
                    <input type="button" onClick={this.AddCandidate} value="Add candiate" name="name" className="btn btn-block btn-light"/>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-block btn-success">Submit to blockchain</button>
                    </div>



                </form>
                
            </div>
        )
    }
}
export default Admin