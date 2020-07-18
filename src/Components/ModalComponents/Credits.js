import React from 'react'


const Credits = ({toggleCredits}) =>{
    return(
        <div className='Modal-background' onClick={toggleCredits}>
            <div className='credits-container'>
            <h1>Credits</h1>
                <p>Created by Tyrone Wallace</p>
            </div>
        </div>
    )
}

export default Credits;