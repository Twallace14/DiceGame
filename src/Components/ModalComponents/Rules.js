import React from 'react'


const Rules = ({toggleRules}) =>{
    return(
        <div className='Modal-background' onClick={toggleRules} >
            <div className='rules-container'>
            <h1>How to play</h1>
                <p>Roll the Dice, the difference in your dice roll is taken from you health respectively, win two round to win the game. incrase you score by wining games, pay attention to your health bar</p>
            </div>
        </div>
    )
}

export default Rules;