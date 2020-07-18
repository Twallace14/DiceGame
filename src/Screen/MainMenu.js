import React, { useState } from 'react';
import Rules from '../Components/ModalComponents/Rules'
import Credits from '../Components/ModalComponents/Credits'
import Game from '../Screen/Game'
import NeonButton from '../Components/Form-Components/NeonButton';
import './MainMenuStyles.scss'
import Logo from '../Assets/shyzu-banner.png'

const MainMenu = ({ Profile, updateScore

}) => {

    const [showRules, setShowRules] = useState(false);

    const [showCredits, setShowCredits] = useState(false);

    const [startGame, setStartGame] = useState(false);

    const toggleRules = () => {
        setShowRules(!showRules)
    }

    const toggleCredits = () => {
        setShowCredits(!showCredits)
    }

    const ToggleGame = () => {
        setStartGame(!startGame)
    }





    return (<div >

        {startGame ? <Game tg={ToggleGame} updateScore={updateScore} Profile={Profile} /> :


            <div className='menu-container'>

            <div className="header">
            <img src={Logo} alt='logo-picture' />
            </div>

                <div className="profile-container">
                    <h1>{Profile.userName}</h1>
                    <h3>Win Record: {Profile.score }</h3>
                </div>



                <div className='pop-up'>



                    {showCredits &&
                        <Credits toggleCredits={toggleCredits} />}

                    {showRules && <Rules toggleRules={toggleRules} />}

                </div>








                <NeonButton onClick={toggleRules}>How to Play</NeonButton>


                <NeonButton onClick={ToggleGame}>Play</NeonButton>


                <NeonButton onClick={toggleCredits}>Credits</NeonButton>

            </div>}


    </div>



    )

}

export default MainMenu;

