// actions

export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
export const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS';
export const GET_CONTENT_ERROR = 'GET_CONTENT_ERROR';
export const SELECT_TYPE_CONTENT = 'SELECT_TYPE_CONTENT';

// actions creators

const getContentRequest = typeContent => ({
  type: GET_CONTENT_REQUEST,
  typeContent
});

const getContentSuccess = (typeContent, items) => ({
  type: GET_CONTENT_SUCCESS,
  typeContent,
  items
});

const getContentError = (typeContent, error) => ({
  type: GET_CONTENT_ERROR,
  typeContent,
  error
});

export const selectTypeContent = typeContent => ({
  type: SELECT_TYPE_CONTENT,
  typeContent
});

// thunk functions

const asyncGetContent = (typeContent, page, firebase) => dispatch => {
  dispatch(getContentRequest(typeContent));
  firebase.getPage(typeContent, page)
    .then(items => dispatch(getContentSuccess(typeContent, items)))
    .catch(error => dispatch(getContentError(typeContent, error)))
};

const shouldGetContent = (typeContent, state) => {
  const content = state.content[typeContent];
  if (!content) {
    return true
  } else if (content.isLoading) {
    return false
  }
};

export const getContentIfNeeded = (typeContent, page, firebase) => (dispatch, getState) => {
  if (shouldGetContent(typeContent, getState())) {
    return dispatch(asyncGetContent(typeContent, page, firebase))
  }
};