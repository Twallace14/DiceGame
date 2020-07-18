import React from 'react';
import FormInput from '../Form-Components/FormInput';





import './SignUpStyles.scss'
import NeonButton from '../Form-Components/NeonButton';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            Guest: false,

        };
    }




    handleGuest = () => {
        this.setState((prevState) => {
            return { Guest: !prevState.Guest };
        });
    }

    handleSubmit = event => {


        event.preventDefault();
        const { password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }else{

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                userName: this.state.userName
            })
        })
       .then(response => response.json())
       .then(user => {
           if (user.id) {
            this.props.loadUser(user)
            this.props.STGS();
           }
           this.props.STGS();
       })
    }
};

    handleChange = event => {
        const { name, value } = event.target;


        this.setState({ [name]: value });
    };

    render() {
        const { userName, email, password, confirmPassword, Guest } = this.state;
        return (
            <div className='sign-up'>
                <span>Sign up with an email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <input type='checkbox' name='guest' value={Guest} onClick={this.handleGuest} />
                    <span>Play as a guest</span>

                    <FormInput

                        type='text'
                        name='userName'
                        value={userName}
                        onChange={this.handleChange}
                        label='User Name' required
                    />


                    {!this.state.Guest ?

                        <div>
                            <FormInput

                                type='email'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                                label='Email' required
                            />
                            <FormInput

                                type='password'
                                name='password'
                                value={password}
                                onChange={this.handleChange}
                                label='Password' required
                            />
                            <FormInput

                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={this.handleChange}
                                label='Confirm Password' required
                            />
                           

                                <button type='submit'>Sign Up</button>

                        </div> :

                        <div>
                            <NeonButton>play as guest</NeonButton>
                        </div>
                    }
                </form>


            </div>
        )
    }
}

export default SignUp;