import React from 'react';
import './DiceDisplayStyles.scss'









const DiceDisplay = ({leftDice, rightDice, Owner}) => {
    if(!leftDice){
        return(
            <div>loading...</div>
        )
    }else{
        return (
            <div className='DiceDisplay-container'>
                <div className='Dice-1'>
           <img src={`/DicePics/${Owner}Dice${leftDice}.png`} alt={leftDice}/>
                </div>
                <div className='Dice-2'>
                <img src={`/DicePics/${Owner}Dice${rightDice}.png`} alt={rightDice}/>
                </div>
            </div>

    );
    }
    

    }

export default DiceDisplay