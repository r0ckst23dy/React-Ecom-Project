import React, { Component } from 'react';

export class FormInput extends Component { 
    render() { 
        const { className, title, placeholder, input, type } = this.props;
        return ( 
            <div className= {`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <input className='form-input__input' type={type} placeholder={placeholder} {... input} />
            </div>
        )
    }
};


export class FormButton extends Component { 
    render() { 
        const { className, title, placeholder, input, type, onClick } = this.props;
        return ( 
            <div className= {`${className} form-button`}>
                <button
                    className={`form-button__button`} 
                    type={type}
                    {... input}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        )
    }
}