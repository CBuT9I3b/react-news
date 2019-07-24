import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR} from '../actions'
import { INITIAL_STATE_LIST } from '../constants'

function listItems(state = INITIAL_STATE_LIST, action) {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.items,
        page: action.page
      };
    case GET_ITEMS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.error
      };
    default:
      return state
  }
}

export function listItemsByType(state = {}, action) {
  switch (action.type) {
    case GET_ITEMS_ERROR:
    case GET_ITEMS_SUCCESS:
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        [action.itemsType]: listItems(state[action.itemsType], action)
      };
    default:
      return state
  }
}
