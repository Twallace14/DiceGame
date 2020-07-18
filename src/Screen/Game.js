import React from 'react';
import HealthBar from '../Components/Game-Components/HealthBar'
import WinDisplay from '../Components/Game-Components/WinDisplay';
import DisplayName from '../Components/Game-Components/DisplayName';
import './GameStyles.scss'
import BattleDisplay from '../Components/Game-Components/BattleDisplay';
import NeonButton from '../Components/Form-Components/NeonButton';
import DiceDisplay from '../Components/Game-Components/DiceDisplay';
import Logo from '../Assets/shyzu-banner.png'




class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDice1: 0,
            userDice2: 0,
            enemyDice1: 0,
            enemyDice2: 0,
            result: " ",
            eSpirit: 20,
            uSpirit: 20,
            userWins: 0,
            enemyWins: 0


        };
    }

    resetGame = () => {
        this.setState({
            eSpirit: 20,
            uSpirit: 20,
            userWins: 0,
            enemyWins: 0

        })
    }

    resetSpirit = () => {
        this.setState({
            eSpirit: 20,
            uSpirit: 20

        })
    }


    addUserPoint = () => {
        this.setState({
            userWins: this.state.userWins + 1
        })
    }

    addEnemyPoint = () => {
        this.setState({
            enemyWins: this.state.enemyWins + 1
        })
    }

    rollDice = () => {
        let userD1Value = Math.floor(Math.random() * 6 + 1);
        let userD2Value = Math.floor(Math.random() * 6 + 1);
        const enemyD1Value = Math.floor(Math.random() * 6 + 1);
        const enemyD2Value = Math.floor(Math.random() * 6 + 1);

        const userValue = userD1Value + userD2Value;
        const enemyValue = enemyD1Value + enemyD2Value;
        const lossDif = enemyValue - userValue;
        const winDif = userValue - enemyValue;

        const winSubract = () => {
            this.setState({
                eSpirit: this.state.eSpirit - winDif
            })
        }

        const looseSubract = () => {
            this.setState({
                uSpirit: this.state.uSpirit - lossDif
            })
        }

        // Result Decision

        if (userD1Value === userD2Value && userValue > enemyValue) {
            this.setState({
                result: "dodge attack"
            })
        } else if (enemyD1Value === enemyD2Value && userValue < enemyValue) {
            this.setState({
                result: "missed"
            })
        } else if (enemyD1Value === enemyD2Value && userD1Value === userD2Value) {
            this.setState({
                result: 'block'
            })
        }

        if (userValue > enemyValue) {
            this.setState({
                result: "winner"
            })
            winSubract()
        } else if (userValue === enemyValue) {
            this.setState({
                result: "draw"
            })
        } else {
            this.setState({
                result: "Looser"
            })
            looseSubract()
        };

        this.setState({
            userDice1: userD1Value,
            userDice2: userD2Value,
            enemyDice1: enemyD1Value,
            enemyDice2: enemyD2Value,

        })

        if (this.state.eSpirit <= 0) {
            this.addUserPoint();
            if (this.state.userWins == 1) {
                alert('gameover You win', this.resetGame())
                fetch('http://localhost:3000/score', {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: this.props.Profile.id,

                    })
                }).then(response => response.json())
                    .then(score => {
                        this.props.updateScore(score);
                    })

            } else {
                this.resetSpirit();
            }
        } else if (this.state.uSpirit <= 0) {
            this.addEnemyPoint();
            if (this.state.enemyWins == 1) {
                alert('gameover You Loose', this.resetGame())

            } else {
                this.resetSpirit();
            }
        }
    }













    render() {






        return (
            <div className="game-screen">
                <div className='game-container'>
                <div className="logo-header">
                <img src={Logo} alt='logo-picture' />
            </div>

                    <div className="user-hud">
                        <div className="display-name" >
                            <DisplayName userName={this.props.Profile.userName} />
                        </div>
                        <div className="win-display">
                            <WinDisplay wins={this.state.userWins} />
                        </div>
                        <div className="health-bar">
                            <HealthBar health={this.state.uSpirit} />
                        </div>
                    </div>
                    <div className="battle-container">
                        <BattleDisplay result={this.state.result}
                            userPoints={this.state.userDice1 + this.state.userDice2}
                            enemyPoints={this.state.enemyDice1 + this.state.enemyDice2} />
                    </div>




                    <div className="enemy-hud">
                        <div className="display-name" >
                            <DisplayName userName='cpu' />
                        </div>
                        <div className="win-display">
                            <WinDisplay wins={this.state.enemyWins} />
                        </div>
                        <div className="health-bar">
                            <HealthBar health={this.state.eSpirit} />
                        </div>
                    </div>









                    <div className="buttons">
                    <div className='reset-button'><NeonButton  onClick={this.resetGame}> Reset</NeonButton></div>
                    <div className='roll-button'><NeonButton  onClick={this.rollDice}> Roll</NeonButton></div>    
                    <div className='home-button'><NeonButton  onClick={this.props.tg}> Home</NeonButton></div>
                        
                    </div>

                    <div className='user-dice-container'>
                        <DiceDisplay Owner='user'leftDice={this.state.userDice1} rightDice={this.state.userDice2} />
                    </div>
                    <div className='enemy-dice-container'>
                        <DiceDisplay Owner='Cpu' leftDice={this.state.enemyDice1} rightDice={this.state.enemyDice2} />
                    </div>








                </div>
            </div>
        );
    }
}


export default Game;