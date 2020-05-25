import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';



class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return ( 
            <form className= {`${className} sign-in-form`}> 
                <h1>SIGN IN</h1>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;