import React from 'react';
import './DisplayNameStyles.scss'








const DisplayName = ({userName}) => {
    return (
            <div className='displayName-conatiner'>{userName}</div>
    );

    }

export default DisplayName