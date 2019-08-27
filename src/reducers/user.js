import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions'
import { INITIAL_STATE_USER } from '../constants'

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.user
      };
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      };
    default:
      return state
  }
}

export function userById(state = {}, action) {
  switch (action.type) {
    case GET_USER_ERROR:
    case GET_USER_SUCCESS:
    case GET_USER_REQUEST:
      return {
        ...state,
        [action.id]: user(state[action.id], action)
      };
    default:
      return state
  }
}
