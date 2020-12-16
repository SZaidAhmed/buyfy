import {combineReducers} from 'redux';
import AuthReducer from './Auth/AuthReducer';

var RootReducer = combineReducers({
    auth : AuthReducer
})

export default RootReducer