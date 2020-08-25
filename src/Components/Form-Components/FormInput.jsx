import React from 'react';
import './FormInputStyles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input placeholder={label} className='form-input' onChange={handleChange} {...otherProps} required minLength="2" />
      
    </div>
);

export default FormInput;
