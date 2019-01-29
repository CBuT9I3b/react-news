import { combineReducers } from 'redux'

import { selectType, contentByType } from '.'

export const rootReducer = combineReducers({
  selectedType: selectType,
  content: contentByType
});
