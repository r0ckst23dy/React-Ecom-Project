import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


import { FormInput, FormButton } from '../formfields';
import history from '../../history';
import OrderSummary from './orderSummary';


class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return ( 
            <form onSubmit={handleSubmit} className= {`${className} payment-form`}> 
                <Field 
                    className='payment-form__name' 
                    type='name' 
                    title='Name on Credit Card'
                    placeholder='Name' 
                    name='name' 
                    component={FormInput}
                />
                <Field 
                    className='payment-form__card' 
                    type='card' 
                    title='Credit Card Number'
                    placeholder='___-___-___-___' 
                    name='card' 
                    component={FormInput}
                />
                <Field 
                    className='payment-form__expiration' 
                    type='expiration' 
                    title='Expiration Date'
                    placeholder='Expiration' 
                    name='expiration' 
                    component={FormInput}
                />
                <Field 
                    className='payment-form__cvv' 
                    type='cvv' 
                    title='CVV'
                    placeholder='CVV' 
                    name='cvv' 
                    component={FormInput}
                /> 
                <div className='payment-form__line' />
                <Field 
                    className='payment-form__back' 
                    onClick={() => history.push('/information/shipping')}
                    type='button' 
                    title='Back' 
                    name='back' 
                    short= {true}
                    component={FormButton}
                /> 
                <Field 
                    className='payment-form__pay-complete' 
                    onClick={() => history.push('/information/payment')}
                    type='submit' 
                    title='Pay and Complete Order' 
                    name='pay-complete' 
                    component={FormButton}
                />              
                <OrderSummary className='payment-form__order-summary'/>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;