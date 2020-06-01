import React, { Component } from 'react';
import { connect } from 'react-redux';

class PurchaseDetail extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className= {`${className} purchase-detail`}>
                purchase detail goes heres
            </div>
        )
    }
}

export default PurchaseDetail;