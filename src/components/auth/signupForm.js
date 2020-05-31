import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


import { FormInput, FormButton } from '../formfields';
import Details from '../details';
import history from '../../history';



class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {
                id: 0,
                title: 'At least 6 characters'
            },
            {
                id: 1,
                title: "At least one number"
            },            
            {
                id: 2,
                title: 'At least one symbol'
                
            }            
        ]
        return ( 
            <form onSubmit={handleSubmit} className= {`${className} sign-up-form`}> 
                <Field 
                    className='sign-up-form__name' 
                    type='name' 
                    title='Name'
                    placeholder='Name' 
                    name='Name' 
                    component={FormInput}
                />

                <Field 
                    className='sign-up-form__email' 
                    type='email' 
                    title='Email'
                    placeholder='Email' 
                    name='email' 
                    component={FormInput}
                /> 

                <Field 
                    className='sign-up-form__password' 
                    type='password' 
                    title='Password'
                    placeholder='Password' 
                    name='password' 
                    component={FormInput}
                /> 

                <Field 
                    className='sign-up-form__confirm' 
                    type='password' 
                    title='Confirm Password'
                    placeholder='Confirm Password' 
                    name='Confirm Password' 
                    component={FormInput}
                />                        
                <div className='sign-up-form__line' />
                <Field 
                    className='sign-up-form__back' 
                    onClick={() => history.push('/signin')}
                    type='button' 
                    title='Back' 
                    name='back' 
                    short= {true}
                    component={FormButton}
                /> 
                <Field 
                    className='sign-up-form__create' 
                    onClick={() => history.push('/account')}
                    type='submit' 
                    title='Create Account' 
                    name='create-account' 
                    component={FormButton}
                />                             
                <Details className='sign-up-form__details' title='Password Requirements' info={info}/>                         
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;