import React from 'react';
import './BattleDisplayStyles.scss'








const BattleDisplay = ({userPoints, result, enemyPoints}) => {
    return (
            <div className='BattleDisplay-container'>
                <div className='points-container'>
                   {userPoints}
                </div>
                <div className="results-container">{result}</div>
                <div className='points-container'>
                    {enemyPoints}
                </div>
            </div>

    );

    }

export default BattleDisplay