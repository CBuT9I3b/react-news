import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../services'

const initialState = {
  email: '',
  password: '',
  error: ''
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  onSubmit = event => {
    event.preventDefault();
    let { email, password } = this.state;
    signIn(email, password)
      .then(() => {
        this.setState({...initialState});
        this.props.history.push('/')
      })
      .catch(error => (
        this.setState({error: error.message})
      ))
  };

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  render() {
    let { email, password, error } = this.state;
    let isInvalid = email === '' || password === '';
    return (
      <div className='row'>
        <div className='col s8 offset-s2 m6 offset-m3 l4 offset-l4'>
          <h5>Sign In</h5>
          <form>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='email'
                value={email}
                id='email'
                type='email'
                className='validate'
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='password'
                value={password}
                id='password'
                type='password'
                className='validate'
              />
              <label htmlFor='password'>Password</label>
            </div>
            <button
              onClick={this.onSubmit}
              disabled={isInvalid}
              className="waves-effect waves-light btn"
            >OK</button>
            <p>{error}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
