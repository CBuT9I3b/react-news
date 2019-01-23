import { auth } from '../services'

// actions

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_ERROR = 'USER_ERROR';

// actions creators

const userLogin = user => ({
  type: USER_LOGIN,
  user
});

const userLogout = () => ({
  type: USER_LOGOUT
});

// thunk functions

export function checkUser() {
  return dispatch => (
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(userLogin(user.email))
      } else {
        dispatch(userLogout())
      }
    })
  )
}
