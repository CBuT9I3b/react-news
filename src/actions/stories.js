// actions

export const GET_STORIES_REQUEST = 'GET_STORIES_REQUEST';
export const GET_STORIES_SUCCESS = 'GET_STORIES_SUCCESS';
export const GET_STORIES_ERROR = 'GET_STORIES_ERROR';
export const GET_STORIES_MORE = 'GET_STORIES_MORE';

// actions creators

const getStoriesRequest = storiesType => ({
  type: GET_STORIES_REQUEST,
  storiesType
});

const getStoriesSuccess = (storiesType, stories) => ({
  type: GET_STORIES_SUCCESS,
  storiesType,
  stories
});

const getStoriesError = (storiesType, error) => ({
  type:GET_STORIES_ERROR,
  storiesType,
  error
});

export const getStoriesMore = storiesType => ({
  type: GET_STORIES_MORE,
  storiesType
});

// thunk functions

const asyncGetStories = (firebase, storiesType) => dispatch => {
  dispatch(getStoriesRequest(storiesType));
  firebase.getStories(storiesType)
    .then(stories => dispatch(getStoriesSuccess(storiesType, stories)))
    .catch(error => dispatch(getStoriesError(storiesType, error)))
};

const shouldGetStories = (storiesType, state) => {
  const stories = state.storiesCache[storiesType];
  if (!stories) {
    return true
  } else if (stories.isLoading) {
    return false
  }
};

export const getStoriesIfNeeded = (firebase, storiesType) => (dispatch, getState) => {
  if (shouldGetStories(storiesType, getState())) {
    return dispatch(asyncGetStories(firebase, storiesType))
  }
};
