import React,{useState} from 'react'
import { connect } from 'react-redux';
import { signup } from './../../Redux/Auth/AuthActions';

const SignupForm = ({signup}) => {
    var [Fullname , setFullName] = useState("");
    var [Email , setemail] = useState("");
    var [Password , setPassword] = useState("");

    var handleFormSubmit = (e)=>{
        e.preventDefault();
        var cred={
            Fullname,
            Email,
            Password
        }
        signup(cred)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={Fullname} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Fullname..." />
                <input value={Email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email..."/>
                <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password..." />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}
var actions = {
    signup
}

export default connect(null,actions)(SignupForm)
