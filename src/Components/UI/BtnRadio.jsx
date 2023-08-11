import React from 'react';

const BtnRadio = (props) => {
    return (
        <React.Fragment>
            <input
                type='radio'
                className='btn-check'
                name='btnRadio'
                id={props.id}
                autoComplete='off'
            />
            <label className='btn btn-outline-primary' htmlFor={props.id}>
                {props.label}
            </label>
        </React.Fragment>
    );
};

export default BtnRadio;
