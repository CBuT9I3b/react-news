import { getStories } from '../services'

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
  items,
  receivedAt: Date.now()
});

const getContentError = (typeContent, error) => ({
  type: GET_CONTENT_ERROR,
  typeContent,
  error,
  receivedAt: Date.now()
});

export const selectTypeContent = typeContent => ({
  type: SELECT_TYPE_CONTENT,
  typeContent
});

// thunk functions

function asyncGetContent(typeContent) {
  return function(dispatch) {
    dispatch(getContentRequest(typeContent));
    getStories(typeContent)
      .then(items => dispatch(getContentSuccess(typeContent, items)))
      .catch(error => dispatch(getContentError(typeContent, error)))
  }
}

function shouldGetContent(state, typeContent) {
  let content = state.content[typeContent];
  if (!content) {
    return true
  } else if (content.isLoading) {
    return false
  }
}

export function getContentIfNeeded(typeContent) {
  return function(dispatch, getState) {
    if (shouldGetContent(getState(), typeContent)) {
      return dispatch(asyncGetContent(typeContent))
    }
  }
}
