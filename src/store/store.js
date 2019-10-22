import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from '../reducers'

const isDev = process.env.NODE_ENV === 'development';
const middlewareList = [];

middlewareList.push(thunkMiddleware);
if (isDev) {
  middlewareList.push(createLogger())
}

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewareList)
  )
}
