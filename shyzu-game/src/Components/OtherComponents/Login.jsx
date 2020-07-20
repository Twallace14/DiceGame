import React from 'react';
import './Login.scss';
import FormInput from '../Form-Components/FormInput';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ' ',
            password: ' '
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
       .then(response => response.json())
       .then(user => {
           if (user.id) {
            this.props.loadUser(user)
            this.props.STGS()
           }
       })

    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
              
                <span>Sign in With your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email} required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className='button'>
                        <button type='submit'> Sign in </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login