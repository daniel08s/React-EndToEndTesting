import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Login';
import SuccessMessage from './SuccessMessage';

class App extends Component {
  state = {
    complete: false,
    firstName: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (document.cookie.includes('JWT')) {
      this.setState({complete: true});
    }
    document.cookie = `firstName=${this.state.firstName}`
  };

  handleInput = (e) => {
    this.setState({firstName: e.currentTarget.value});
  };

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
        {
          this.state.complete ?
          <SuccessMessage />
          : <Login submit={this.handleSubmit} input={this.handleInput} />
        }
      </div>
    );
  }
}

export default App;
