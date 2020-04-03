import {combineReducers} from 'redux'
import connectionReducer from './connectionReducer'
import createElectionReducer from './createElectionReducer'
import authReducer from './authReducer'
import AdminAuthReducer from './AdminAuthReducer'




export default combineReducers({
    connect:connectionReducer,
    createElection:createElectionReducer,
    auth:authReducer,
    adminAuth:AdminAuthReducer

})