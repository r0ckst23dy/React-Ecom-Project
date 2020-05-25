import React, { Component } from 'react';
import SignInForm from '../../style/auth/signinform';
import PageTitle from '../pageTitle';




class SignIn extends Component {
    onSubmit = (fields) => {
        console.log('fields', fields);
        
    }
    render() {
        return ( 
            <div className= 'sign-in'> 
                <PageTitle className='sign-in__page-title' title='Login'/>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}


export default SignIn;