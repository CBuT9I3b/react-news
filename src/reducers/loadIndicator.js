import { GET_STORIES_REQUEST, GET_STORIES_SUCCESS, GET_STORIES_ERROR } from '../actions'

export function loadIndicator(state = false, action) {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return true;
    case GET_STORIES_SUCCESS:
      return false;
    case GET_STORIES_ERROR:
      return false;
    default:
      return state
  }
}
