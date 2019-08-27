// actions

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

// actions creators

const getUserRequest = id => ({
  type: GET_USER_REQUEST,
  id
});

const getUserSuccess = (id, user) => ({
  type: GET_USER_SUCCESS,
  id,
  user
});

const getUserError = (id, error) => ({
  type: GET_USER_ERROR,
  id,
  error
});

// thunk functions

const asyncGetUser = (firebase, id) => dispatch => {
  dispatch(getUserRequest(id));
  firebase.getUser(id)
    .then(user => dispatch(getUserSuccess(id, user)))
    .catch(error => dispatch(getUserError(id, error)))
};

const shouldGetUser = (id, state) => {
  let user = state.usersCache[id];
  if (!user) {
    return true
  } else if (user.isLoading) {
    return false
  }
};

export const getUserIfNeeded = (firebase, id) => (dispatch, getState) => {
  if (shouldGetUser(id, getState())) {
    dispatch(asyncGetUser(firebase, id))
  }
};
