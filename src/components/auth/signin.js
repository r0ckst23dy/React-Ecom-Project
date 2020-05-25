import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';



class SignIn extends Component {
    render() {
        return ( 
            <div className= 'sign-in'> 
                <h1>SIGN IN</h1>
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SignIn'
})(SignIn);

export default SignIn;