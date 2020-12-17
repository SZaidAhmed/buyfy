import React from 'react'
import { connect } from 'react-redux';
import { signout } from './../../Redux/Auth/AuthActions';

const Signout = ({signout}) => {
    return (
        <div>
            <button onClick={signout}> SignOut</button>
        </div>
    )
}

var action={
    signout
}

export default connect(null,action)(Signout)
