import React,  { Component } from 'react'; 

class Quantity extends Component { 
    render() { 
        const { className, quantity } = this.props;
        return (
            <div className= {`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                    <i className= 'fa fa-plus'></i>
                </div>                
                <div className='quantity__minus'>
                    <i className= 'fa fa-minus'></i>
                </div>                
            </div>
        )
    }
}

export default Quantity;