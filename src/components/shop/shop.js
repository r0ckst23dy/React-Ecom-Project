import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
class Shop extends Component { 
    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        // set header links 
        // fetch shop products action creater 
        //fetch navbar links
            //set navbar links
            //filter product links
    }
    render() { 
        return(
            <div className='shop'>
            {/* search bar component */}
            {/* shop product */}
            {/* cart button */}
                shop...
            </div>
        )
    }
}

function mapStateToProps(state) {
    return (state);
}


Shop = connect(mapStateToProps, actions)(Shop)
export default Shop;