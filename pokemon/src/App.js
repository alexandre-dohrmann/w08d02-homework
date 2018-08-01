import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: '',
    } 
    console.log(this.state);
  }
  login = (username) => {
    this.setState({
      username: username,
      logged: true,
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
