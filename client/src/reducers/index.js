import {combineReducers} from 'redux'
import connectionReducer from './connectionReducer'
import createElectionReducer from './createElectionReducer'
import authReducer from './authReducer'




export default combineReducers({
    connect:connectionReducer,
    createElection:createElectionReducer,
    auth:authReducer

})