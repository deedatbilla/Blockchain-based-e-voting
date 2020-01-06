import {combineReducers} from 'redux'
import connectionReducer from './connectionReducer'


export default combineReducers({
    connect:connectionReducer
})