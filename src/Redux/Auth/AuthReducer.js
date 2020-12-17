import { REMOVE_USER, SET_USER } from './AuthConstants';

var initialState = null;
var AuthReducer = (state = initialState , action) =>{
    var {type , payload} = action;
    switch (type) {
        case SET_USER:
            return payload.user;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
}

export default AuthReducer