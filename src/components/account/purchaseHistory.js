import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchase from './purchases';
import PurchaseDetail from './purchaseDetail';

class PurchaseHistory extends Component { 
    render() { 
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History' />
                <Purchase className= 'purchase-history__purchase' />
                <PurchaseDetail className= 'purchase-history__purchase-detail'/>
                <div className='purchase-history__border-bottom' />
            </div>
        )
    }
}

export default PurchaseHistory;