import { combineReducers } from 'redux'

import { loadIndicator } from './loadIndicator'
import { storiesByType } from './stories'
import { itemById } from './item'
import { userById } from './user'

export const rootReducer = combineReducers({
  loading: loadIndicator,
  storiesCache: storiesByType,
  itemsCache: itemById,
  usersCache: userById
});
