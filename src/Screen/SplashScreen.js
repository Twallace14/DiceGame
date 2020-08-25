import React, { useState } from 'react'
import Login from '../Components/OtherComponents/Login';
import SignUp from '../Components/OtherComponents/SignUp';
import './SplashScreenStyles.scss'
import logo from '../Assets/shyzu-banner.png'
import MainMenu from './MainMenu';
import NeonButton from '../Components/Form-Components/NeonButton';



const SplashScreen = () => {

    const [PlayGame, setPlayGame] = useState(false);

    const [profile, setProfile] = useState({id: '', userName: '', email: '', score: '', joined: ''})

    const [loginForm, setLoginForm] = useState(false)

    const [registerForm, setRegisterForm] = useState(false)

  

    const switchToGameScreen = ( ) => {
        setPlayGame(!PlayGame);    
    }

    const showLoginForm = ( ) => {
        setLoginForm(!loginForm);    
    }

    const showRegisterForm = ( ) => {
        setRegisterForm(!registerForm);    
    }

    const loadUser = (data) => {
        setProfile(
            {id: data.id,
            userName: data.username,
            email: data.email,
            score: data.score,
            joined: data.joined
        })

        console.log(data)
        console.log(profile)
    }

    const GuestUser = (guestUserName) => {
        setProfile(
            {id: null,
                userName: guestUserName,
                email: null,
                score: 0,
                joined: null
            }  
        )
    }

    const updateScore = (data) => {
        setProfile({...profile, score: data})
    }

    if (!PlayGame) {

        return (
            <div className='Splash-Page'>
            <div className="logo-container">
                <img src={logo} alt='logo' />
            </div>
            <div className='login-section'>
            <NeonButton onClick={showLoginForm}> I allready have an account </NeonButton>
            
            {loginForm &&
                <Login   STGS={switchToGameScreen} loadUser={loadUser} /> }

           
            </div>
            <div className='sign-up-section'>
            <NeonButton onClick={showRegisterForm}>I don't have an account</NeonButton>
            {registerForm &&
                <SignUp   STGS={switchToGameScreen} loadUser={loadUser} GuestUser={GuestUser}/> }
                
            </div>
               
            </div>
        );

    }else {
        return (
            <MainMenu Profile={profile} updateScore={updateScore}/>
        );
       
    }



}

export default SplashScreen;