import React, { Component } from 'react'; 
import { reduxForm, Field} from 'redux-form';

function FormSearchBar(props) { 
    return (
        <div className='search-bar-grid'>
            <i className="fas fa-search search-bar-grid__icon"></i>
            <input className={`${props.className} shop-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder} `}/>
        </div>
    )
}
{/* <i class="fas fa-search"></i> */}
class ShopSearchBar extends Component { 
    render() { 
        const { className, handleSubmit } = this.props;
        return ( 
            <form className={`${className} shop-seach-bar`} onSubmit={handleSubmit}>
                <Field className='shop-seach-bar__form-search-bar' name='query' placeholder='Search' component={FormSearchBar} />
            </form>
        )

    }
}

ShopSearchBar=reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;