import React, { Component } from 'react'
const Context =React.createContext();

const reducer=(state,action)=>{
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
            }
            
            
    
        default:
            return state;
    }
}
 class context extends Component {

    state = { 
        storageValue: 0, 
        web3: null, 
        accounts: null, 
        contract: null,
        dispactch:action=>this.setState(state=>reducer(state,action))
    };
    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }
}
export const Consumer=Context.Consumer