import React from 'react';

import './Login.css';

export default function Login(props) {
  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={props.submit} className="formSignin">
          <input
            data-testid="firstName"
            type="text"
            placeholder="First Name"
            className="form-control"
            onChange={props.input}
          />
          <input data-testid="lastName" type="text" placeholder="Last Name" className="form-control" />
          <input data-testid="email" type="text" placeholder="Email" className="form-control" />
          <input data-testid="password" type="password" placeholder="password" className="form-control" />
          <div>
            <button data-testid="submit" className="form-control">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
