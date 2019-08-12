import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_LIST } from '../constants'

import { withFirebase } from '../services'
import { asyncGetItems, getItemsIfNeeded } from '../actions'

import { Card, ListItems } from '../components'

class ContainerListItems extends Component {
  componentDidMount() {
    let { firebase, dispatch, type, page } = this.props;

    window.addEventListener('scroll', this.handleScroll);

    dispatch(getItemsIfNeeded(type, page, firebase))
  }

  componentDidUpdate(prevProps) {
    let { firebase, dispatch, type, page } = this.props;

    if (type !== prevProps.type) {
      dispatch(getItemsIfNeeded(type, page, firebase))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  addNextPage = () => {
    let { firebase, dispatch, type, page } = this.props;

    dispatch(asyncGetItems(type, page + 1, firebase))
  };

  handleScroll = () => {
    let { isLoading } = this.props;
    let element = document.documentElement;

    if (!isLoading) {
      if ((element.scrollTop + element.clientHeight) === element.scrollHeight) {
        this.addNextPage()
      }
    }
  };

  render() {
    const { isLoading, isError, items } = this.props;

    return (
      <Fragment>
        {items && (
          <ListItems
            isLoading={isLoading}
            isError={isError}
            items={items}
          />
        )}

        {isLoading && (
          <Card info title='Loading...' time={new Date() / 1000} />
        )}

        {!items && !isLoading && (
          <Card info title='Error' message='No Stories' />
        )}

        {isError && (
          <Card info title='Error' message={isError} />
        )}

        {items && !isLoading && (
          <button
            onClick={this.addNextPage}
            className='waves-effect waves-light btn'
          >More</button>
        )}
      </Fragment>
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
  items: PropTypes.array,
  page: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let { listsCache } = state;
  let { type } = ownProps;
  let { isLoading, isError, items, page } = listsCache[type] || INITIAL_STATE_LIST;
  return { isLoading, isError, items, page }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerListItems)
