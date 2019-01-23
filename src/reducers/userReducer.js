import {
  USER_LOGIN,
  USER_LOGOUT
} from '../actions'

export function userReducer(state = '', action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_LOGOUT:
      return '';
    default:
      return state
  }
}
