import React, { Component } from 'react';
import SignInForm from '../../style/auth/signinform';




class SignIn extends Component {
    onSubmit = (fields) => {
        console.log('fields', fields);
        
    }
    render() {
        return ( 
            <div className= 'sign-in'> 
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}


export default SignIn;