import { auth , firestore, googleAuthProvider, serverTimeStamp } from './../../Firebase/firebase';
import { REMOVE_USER, SET_USER } from './AuthConstants';
import firebase from "../../Firebase/firebase"

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

export var googleSignin = () =>async (dispatch) =>{
    try {
        var {user:{displayName , email , uid} , additionalUserInfo :{isNewUser}} = await auth.signInWithPopup(googleAuthProvider);
        if (isNewUser) {    
            var userInfo = {
                Fullname : displayName,
                Email : email,
                createdAt : serverTimeStamp()
            }
            await firestore.collection("users").doc(uid).set(userInfo);
            dispatch(setUser(userInfo))
        } else {
            var userDataForState = {
                Fullname : displayName,
                Email : email,
                uid
            }
            dispatch(setUser(userDataForState))
        }
    } catch (error) {
        console.log(error)
        
    }
}
export var checkAuthState = () => async (dispatch) =>{
    try {
        firebase.auth().onAuthStateChanged(async function(user){
            if (user) {
                var {uid} = user;
                var userData = await firestore.collection("users").doc(uid).get()
                var {Email , Fullname} = userData.data()
                var userDataForState = {
                    Fullname,
                    Email,
                    uid
                }
                dispatch(setUser(userDataForState))
                console.log(uid) 
            } else {
                
            }
        })
    } catch (error) {
        console.log(error)
    }
}