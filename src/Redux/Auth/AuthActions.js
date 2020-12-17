import { auth, firestore, serverTimeStamp } from './../../Firebase/firebase';
import { REMOVE_USER, SET_USER } from './AuthConstants';

export var setUser = (user) =>async(dispatch)=>{
    try {   
        dispatch({
            type:SET_USER,
            payload:{
                user,
            }
        })
    } catch (error) {
        return error
    }
}
export var removeUser = () =>({
    type:REMOVE_USER
}
)
export var signup = (cred) => async (dispatch) =>{
    try {
        var {Fullname ,Email , Password} = cred
        var user =await  auth.createUserWithEmailAndPassword(Email , Password);
        var uid = user.user.uid
        var userInfo = {
            Fullname,
            Email,
            createdAt : serverTimeStamp()
        }
        await firestore.collection("users").doc(uid).set(userInfo);

        var userDataForState = {
            Fullname,
            Email,
            uid,
        }
        dispatch(setUser(userDataForState))

    } catch (error) {
        console.log(error)
    }
}

export var signin = (cred) =>async(dispatch)=>{
    try {
        var user = await auth.signInWithEmailAndPassword(cred.Email , cred.Password)
        var uid = user.user.uid
        var userData = await firestore.collection("users").doc(uid).get()
        var {Email , Fullname} = userData.data()
        var userDataForState = {
            Fullname,
            Email,
            uid
        }
        dispatch(setUser(userDataForState))
    } catch (error) {
        console.log(error)
    }
}

export var signout = () => async(dispatch)=>{
    try {
        await auth.signOut()
        dispatch(removeUser())
    } catch (error) {
        console.log(error)
    }
}