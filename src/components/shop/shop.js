import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from '../shop/shopProduct';

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
            //filter product links
        this.props.fetchShopProducts();
    }
    shouldComponentUpdate(nextProps) { 
        if(this.props != nextProps) { 
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props. filterProductsWithCategoryId(_id));
        }
        return true
        
    }

    onSubmit = (fields) => {
        this.props.filterProducstWithQuery(fields);
        
    }
    render() { 
        return(
            <div className='shop'>
                <ShopSearchBar className='shop__search-bar' onSubmit={this.onSubmit} />
                <div className= 'shop__products' >
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key= {product._id}/>
                            )
                        })
                    }
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {categories, filteredProducts} = state.shop;
    return { categories, filteredProducts};
}


Shop = connect(mapStateToProps, actions)(Shop)
export default Shop;