import { combineReducers } from 'redux'

import { loadIndicator } from './loadIndicator'
import { listItemsByType } from './listItems'
import { itemById } from './item'

export const rootReducer = combineReducers({
  loading: loadIndicator,
  listsCache: listItemsByType,
  itemsCache: itemById
});
