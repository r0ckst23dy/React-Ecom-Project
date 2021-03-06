import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


import { FormInput, FormButton } from '../formfields';
import Details from '../details';
import history from '../../history';



class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                id: 0,
                title: 'Not Registered? Create Account Here',
                onClick: () => history.push('/signup')
                
            },
            {
                id: 1,
                title: "Forgot Password?",
                onClick: () => console.log('Forgot Password')
                
            },            
            {
                id: 2,
                title: 'Forgot Email',
                onClick: () => console.log('Forgot Email')
                
            }            
        ]
        return ( 
            <form onSubmit={handleSubmit} className= {`${className} sign-in-form`}> 
                <Field 
                    className='sign-in-form__email' 
                    type='email' 
                    title='Email'
                    placeholder='Email' 
                    name='email' 
                    component={FormInput}
                />

                <Field 
                    className='sign-in-form__password' 
                    type='password' 
                    title='Password'
                    placeholder='Password' 
                    name='password' 
                    component={FormInput}
                />       
                <div className='sign-in-form__line' />
                <Field 
                    className='sign-in-form__login' 
                    type='submit' 
                    title='Login' 
                    name='login' 
                    component={FormButton}
                /> 
                <Details className='sign-in-form__details' title='QuickLinks'links={links}/>                         
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;