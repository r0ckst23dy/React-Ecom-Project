import React from 'react';

export function UnderlinedTitle({ className, title}) { 
    return (
        <div className={`${className} underline-title`}>
            {title}
        </div>
    )
}


export function InfoTitle({ className, title, value }) { 
    return (
        <div className={`${className} info-title`}>
            <div className='info-title__title'>
                {title}
            </div>
            <div className='info-title__value'>
                {value}
            </div>
        </div>
    )
}