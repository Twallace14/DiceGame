import React from 'react';
import './WinDisplayStyles.scss'







const WinDisplay = ({wins}) => {

  



    return (
        <div className="display-container">

            <div className='winner-bulb'>
                <div className={`${(wins >=1) ? 'on' : ''} light`}></div>
            </div>
            <div className='winner-bulb'>
                <div className={`${(wins >1) ? 'on' : ''} light`} ></div>
            </div>
        </div>
    );

}

export default WinDisplay