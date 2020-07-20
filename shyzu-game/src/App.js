import React from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom'
import Game from "./Screen/Game";
import SplashScreren  from './Screen/SplashScreen';
import MainMenu from './Screen/MainMenu';



function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/game" component={Game} />
    <Route exact path='/' component={SplashScreren}/>
    <Route path="/MainMenu" component={MainMenu} />


    </Switch>
    </div>
  );
}

export default App;
