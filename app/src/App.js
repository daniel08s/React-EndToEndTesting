import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';
import SuccessMessage from './SuccessMessage';

class App extends Component {
  state = {
    complete: false,
    firstName: '',
    starWars: {},
  };

async componentDidMount() {
  const data = await fetch('https://swapi.co/api/people/1/')
    .then(res => res.json());
  this.setState({starWars: data});
}

  handleSubmit = (e) => {
    e.preventDefault();
    if (document.cookie.includes('JWT')) {
      this.setState({complete: true});
    }
    document.cookie = `firstName=${this.state.firstName}`;
  };

  handleInput = (e) => {
    this.setState({firstName: e.currentTarget.value});
  };

  /*eslint-disable */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 data-testid='h1' className="App-title">Welcome to React</h1>
          <nav data-testid='navbar' className='navbar' role="navigation">
            <li data-testid='navBarLi' className='nav-li'><a href="#">Home</a></li>
            <li data-testid='navBarLi' className='nav-li'><a href="#">About</a></li>
            <li data-testid='navBarLi' className='nav-li'><a href="#">Skills</a></li>
            <li data-testid='navBarLi' className='nav-li'><a href="#">Works</a></li> 
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3 data-testid="starWars">{this.state.starWars.url ? 'Received Star Wars data!' : 'Something went wrong!'}</h3>
        {
          this.state.complete ?
          <SuccessMessage />
          : <Login submit={this.handleSubmit} input={this.handleInput} />
        }
      </div>
    );
    /*eslint-enable */
  }
}

export default App;
