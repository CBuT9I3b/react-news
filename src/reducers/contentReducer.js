import {
  GET_CONTENT_REQUEST,
  GET_CONTENT_ERROR,
  GET_CONTENT_SUCCESS,
  SELECT_TYPE_CONTENT
} from '../actions'

export function selectType(state = '', action) {
  switch (action.type) {
    case SELECT_TYPE_CONTENT:
      return action.typeContent;
    default:
      return state
  }
}

function getContent(state = {
  isLoading: false,
  isError: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      };
    case GET_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.items
      };
    default:
      return state
  }
}

export function contentByType(state = {}, action) {
  switch (action.type) {
    case GET_CONTENT_ERROR:
    case GET_CONTENT_SUCCESS:
    case GET_CONTENT_REQUEST:
      return {
        ...state,
        [action.typeContent]: getContent(state[action.typeContent], action)
      };
    default:
      return state
  }
}
