import { combineReducers } from 'redux'

import { selectType, contentByType, userReducer } from '.'

export const rootReducer = combineReducers({
  selectedType: selectType,
  content: contentByType,
  user: userReducer
});
