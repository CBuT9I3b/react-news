// actions

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_ERROR = 'GET_ITEM_ERROR';

// actions creators

const getItemRequest = id => ({
  type: GET_ITEM_REQUEST,
  id
});

const getItemSuccess = (id, item) => ({
  type: GET_ITEM_SUCCESS,
  id,
  item
});

const getItemError = (id, error) => ({
  type: GET_ITEM_ERROR,
  id,
  error
});

// thunk functions

const asyncGetItem = (id, firebase) => dispatch => {
  dispatch(getItemRequest(id));
  firebase.getItem(id)
    .then(item => dispatch(getItemSuccess(id, item)))
    .catch(error => dispatch(getItemError(id, error)))
};

const shouldGetItem = (id, state) => {
  let item = state.itemsCache[id];
  if (!item) {
    return true
  } else if (item.isLoading) {
    return false
  }
};

export const getItemIfNeeded = (id, firebase) => (dispatch, getState) => {
  if (shouldGetItem(id, getState())) {
    dispatch(asyncGetItem(id, firebase))
  }
};
