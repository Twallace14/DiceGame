import React from 'react'
import "./NeonButtonStyles.scss"

const NeonButton =  ({ children, ...otherProps}) => (
    <button className='neon-button' {...otherProps}>
        {children}
    </button>
);

export default NeonButton