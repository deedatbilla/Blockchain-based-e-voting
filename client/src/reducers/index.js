import {combineReducers} from 'redux'
import connectionReducer from './connectionReducer'
import createElectionReducer from './createElectionReducer'


export default combineReducers({
    connect:connectionReducer,
    createElection:createElectionReducer

})