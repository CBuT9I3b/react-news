import { GET_STORIES_REQUEST, GET_STORIES_SUCCESS, GET_STORIES_ERROR, GET_STORIES_MORE } from '../actions'
import { INITIAL_STATE_STORIES } from '../constants'

function stories(state = INITIAL_STATE_STORIES, action) {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        stories: action.stories
      };
    case GET_STORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      };
    case GET_STORIES_MORE:
      return {
        ...state,
        numberPerPage: state.numberPerPage + 10
      };
    default:
      return state
  }
}

export function storiesByType(state = {}, action) {
  switch (action.type) {
    case GET_STORIES_MORE:
    case GET_STORIES_ERROR:
    case GET_STORIES_SUCCESS:
    case GET_STORIES_REQUEST:
      return {
        ...state,
        [action.storiesType]: stories(state[action.storiesType], action)
      };
    default:
      return state
  }
}
