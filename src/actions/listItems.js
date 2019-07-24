// actions

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

// actions creators

const getItemsRequest = itemsType => ({
  type: GET_ITEMS_REQUEST,
  itemsType
});

const getItemsSuccess = (itemsType, items, page) => ({
  type: GET_ITEMS_SUCCESS,
  itemsType,
  items,
  page
});

const getItemsError = (itemsType, error) => ({
  type: GET_ITEMS_ERROR,
  itemsType,
  error
});

// thunk functions

const updateListItems = (itemsType, page, items, dispatch, state) => {
  const oldList = page !== 0 ? state.listsCache[itemsType].items : [];
  const newList = [
    ...oldList,
    ...items
  ];
  dispatch(getItemsSuccess(itemsType, newList, page))
};

export const asyncGetItems = (itemsType, page, firebase) => (dispatch, getState) => {
  dispatch(getItemsRequest(itemsType));
  firebase.getPage(itemsType, page)
    .then(items => updateListItems(itemsType, page, items, dispatch, getState()))
    .catch(error => dispatch(getItemsError(itemsType, error)))
};

const shouldGetItems = (itemsType, state) => {
  const listItems = state.listsCache[itemsType];
  if (!listItems) {
    return true
  } else if (listItems.isLoading) {
    return false
  }
};

export const getItemsIfNeeded = (itemsType, page, firebase) => (dispatch, getState) => {
  if (shouldGetItems(itemsType, getState())) {
    return dispatch(asyncGetItems(itemsType, page, firebase))
  }
};
