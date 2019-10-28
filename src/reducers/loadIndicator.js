import {
  GET_STORIES_REQUEST, GET_STORIES_ERROR,
  GET_ITEM_REQUEST, GET_ITEM_SUCCESS
} from '../actions'

export function loadIndicator(state = false, action) {
  switch (action.type) {
    case GET_STORIES_REQUEST:
    case GET_ITEM_REQUEST:
      return true;
    case GET_ITEM_SUCCESS:
      return false;
    case GET_STORIES_ERROR:
      return false;
    default:
      return state
  }
}
