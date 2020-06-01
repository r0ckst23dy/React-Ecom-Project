import React, { Component } from 'react';
import { connect } from 'react-redux';

class Purchases extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className= {`${className} purchases`}>
                purchases go heres
            </div>
        )
    }
}

export default Purchases;