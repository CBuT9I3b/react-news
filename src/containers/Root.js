import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { configureStore } from '../store'

import { Firebase, FirebaseContext } from '../services'

import { App } from '../components'

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </Provider>
);

export default Root
