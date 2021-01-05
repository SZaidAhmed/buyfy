import React from 'react'
import {googleSignin} from '../../Redux/Auth/AuthActions'
import { connect } from 'react-redux';

const GoogleSignup = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin}>Signin With Google</button>
        </div>
    )
}

var action ={
    googleSignin   
}

export default connect(null , action)(GoogleSignup)
