import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username);
    }

    render() {
        return (
        <div>
            <h1>Pokémon: Pokédex</h1>
            <h4>Gotta Catch 'Em All</h4><br/><br/>
            <h5>Log-in to View Your Pokédex:</h5>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"/>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}
export default Login;