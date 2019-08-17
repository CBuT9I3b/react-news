import { combineReducers } from 'redux'

import { loadIndicator } from './loadIndicator'
import { storiesByType } from './stories'
import { itemById } from './item'

export const rootReducer = combineReducers({
  loading: loadIndicator,
  storiesCache: storiesByType,
  itemsCache: itemById
});
