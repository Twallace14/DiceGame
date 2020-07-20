import React from 'react';
import './FormAreaStyles.scss';

const FormArea = ({ handleChange, label, ...otherProps }) => {
    if(label === 'report') {
        return ( <div className="group">
        <textarea className='form-area' rows="15" cols="15" placeholder="enter report here" onChange={handleChange} {...otherProps} required />
        
    </div>)
    } else {
        return (  <div className="group">
        <textarea className='form-area' placeholder="enter a breif summary" rows="2" cols="15" onChange={handleChange} {...otherProps} required />
        
    </div>)
    }
}




export default FormArea;
