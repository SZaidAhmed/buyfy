import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm';
import Signout from '../../Components/Signout/Signout';
import SignupForm from './../../Components/SignupForm/SignupForm';

const Authentication = () => {
    return (
        <div>
            <h1>Authentication Page</h1>
            <SignupForm />
            <SigninForm /> 
            <Signout />
        </div>
    )
}

export default Authentication
