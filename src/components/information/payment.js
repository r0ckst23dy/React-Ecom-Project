import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import * as actions from '../../actions';




class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields', fields);
        
    }
    render() {
        return ( 
            <div className= 'payment'> 
                <PageTitle className='payment__page-title' title='Payment Information'/>
                {/* <PaymentForm onSubmit={this.onSubmit} className='payment__form'/> */}
            </div>
        )
    }
}

Payment= connect(null, actions)(Payment);

export default Payment;