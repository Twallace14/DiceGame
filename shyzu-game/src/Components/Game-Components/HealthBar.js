import React from 'react';
import './HealthBarStyles.scss'








const HealthBar = ({health}) => {
    return (
        <div className='health-Container'>
            <div style={{width: `${health * 5}%` }} className='health-Visual'></div>
        </div>
    );

    }

export default HealthBar