import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createUser } from '../../services'

const initialState = {
  email: '',
  password1: '',
  password2: '',
  error: ''
};

class SignUp extends Component {
  constructor(propr) {
    super(propr);
    this.state = initialState
  }

  onSubmit = event => {
    event.preventDefault();
    let { email, password1 } = this.state;
    createUser(email, password1)
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
    let { email, password1, password2, error } = this.state;
    let isInvalid = password1 !== password2 || email === '' || password1 === '' || password2 === '';
    return (
      <div className='row'>
        <div className='col s12 m6 offset-m3 l4 offset-l4'>
          <h5>Sign Up</h5>
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
                name='password1'
                value={password1}
                id='password1'
                type='password'
                className='validate'
              />
              <label htmlFor='password1'>Password</label>
            </div>
            <div className='input-field'>
              <input
                onChange={this.onChange}
                name='password2'
                value={password2}
                id='password2'
                type='password'
                className='validate'/>
              <label htmlFor='password2'>Re-enter Password</label>
            </div>
            <p>{error}</p>
            <button
              onClick={this.onSubmit}
              disabled={isInvalid}
              className="waves-effect waves-light btn"
            >OK</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
