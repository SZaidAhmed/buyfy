import React,{useState} from 'react'
import { connect } from 'react-redux';
import { signin } from './../../Redux/Auth/AuthActions';

const SigninForm = ({signin}) => {
    var [Email , setemail] = useState("");
    var [Password , setPassword] = useState("");

    var handleFormSubmit = (e)=>{
        e.preventDefault();
        var cred = {
            Email,
            Password
        }
        signin(cred)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={Email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email..."/>
                <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password..." />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )

}

var action = {
    signin
}

export default connect(null,action)(SigninForm)
