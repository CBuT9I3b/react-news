import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_STORIES } from '../constants'

import { withFirebase } from '../services'
import { getStoriesIfNeeded, getStoriesMore } from '../actions'

import { Info, ListItems, PreloaderAndMessage } from '../components'

class ContainerListItems extends Component {
  componentDidMount() {
    let { dispatch, firebase, type } = this.props;

    window.addEventListener('scroll', this.handleScroll);

    dispatch(getStoriesIfNeeded(firebase, type))
  }

  componentDidUpdate(prevProps) {
    let { dispatch, firebase, type } = this.props;

    if (type !== prevProps.type) {
      dispatch(getStoriesIfNeeded(firebase, type))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  onMore = () => {
    let { dispatch, type } = this.props;

    dispatch(getStoriesMore(type))
  };

  handleScroll = () => {
    let { isLoading } = this.props;
    let element = document.documentElement;

    if (!isLoading) {
      if ((element.scrollTop + element.clientHeight) === element.scrollHeight) {
        this.onMore()
      }
    }
  };

  render() {
    let { isLoading, isError, stories, numberPerPage } = this.props;

    return (
      <>
        {stories && (
          <ListItems
            ids={stories.slice(0, numberPerPage)}
          />
        )}

        {isLoading && (
          <PreloaderAndMessage message='Stories are loading...' />
        )}

        {!stories && !isLoading && (
          <Info title='Error' message='No Stories' />
        )}

        {isError && (
          <Info title='Error' message={isError} />
        )}

        {stories && !isLoading && (
          <button
            onClick={this.onMore}
            className='waves-effect waves-light btn'
          >More</button>
        )}
      </>
    )
  }
}

ContainerListItems.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  stories: PropTypes.array,
  numberPerPage: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let { storiesCache } = state;
  let { type } = ownProps;
  let { isLoading, isError, stories, numberPerPage } = storiesCache[type] || INITIAL_STATE_STORIES;
  return { isLoading, isError, stories, numberPerPage }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerListItems)
