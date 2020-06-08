import React, { Component } from 'react'; 
import { reduxForm, Field} from 'redux-form';

function FormSearchBar(props) { 
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder} `}/>
    )
}
{/* <i class="fas fa-search"></i> */}
class ShopSearchBar extends Component { 
    render() { 
        const { className, handleSubmit } = this.props;
        return ( 
            <form className={`${className} shop-seach-bar`} onSubmit={handleSubmit}>
                <Field className='shop-seach-bar__form-search-bar' name='query' placeholder='search' component={FormSearchBar} />
            </form>
        )

    }
}

ShopSearchBar=reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;