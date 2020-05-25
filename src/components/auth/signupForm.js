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
                title: 'At least 6 characters',
                onClick: () => history.push('/signup')
                
            },
            {
                id: 1,
                title: "At least one number",
                onClick: () => console.log('Forgot Password')
                
            },            
            {
                id: 2,
                title: 'At least one symbol',
                onClick: () => console.log('Forgot Email')
                
            }            
        ]
        return ( 
            <form onSubmit={handleSubmit} className= {`${className} sign-in-form`}> 
                <Field 
                    className='sign-in-form__name' 
                    type='name' 
                    title='name'
                    placeholder='Name' 
                    name='Name' 
                    component={FormInput}
                />

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
                <Field 
                    className='sign-in-form__confirm-password' 
                    type='confirm-password' 
                    title='confirm-password'
                    placeholder='Confirm Password' 
                    name='Confirm Password' 
                    component={FormInput}
                />                        
                <div className='sign-in-form__line' />
                <Field 
                    className='sign-in-form__back' 
                    onClick={() => console.log("back it on up")}
                    type='button' 
                    title='Back' 
                    name='back' 
                    short= {true}
                    component={FormButton}
                /> 
                <Field 
                    className='sign-in-form__create-account' 
                    onClick={() => console.log("submitting...maybe?")}
                    type='submit' 
                    title='Create Account' 
                    name='create-account' 
                    component={FormButton}
                />                             
                <Details className='sign-in-form__details' title='Password Requirements'links={links}/>                         
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;