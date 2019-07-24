import { GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_ERROR } from '../actions'
import { INITIAL_STATE_ITEM } from '../constants'

function item(state = INITIAL_STATE_ITEM, action) {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        item: action.item
      };
    case GET_ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      };
    default:
      return state
  }
}

export function itemById(state = {}, action) {
  switch (action.type) {
    case GET_ITEM_ERROR:
    case GET_ITEM_SUCCESS:
    case GET_ITEM_REQUEST:
      return {
        ...state,
        [action.id]: item(state[action.id], action)
      };
    default:
      return state
  }
}
