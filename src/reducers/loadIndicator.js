import {
  GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR,
  GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_ERROR
} from '../actions'

export function loadIndicator(state = false, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
    case GET_ITEM_REQUEST:
      return true;
    case GET_ITEMS_SUCCESS:
    case GET_ITEM_SUCCESS:
      return false;
    case GET_ITEMS_ERROR:
    case GET_ITEM_ERROR:
      return false;
    default:
      return state
  }
}
