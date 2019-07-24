import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_ITEM } from '../constants'

import { withFirebase } from '../services'
import { getItemIfNeeded } from '../actions'

import { Card, Article } from '../components'

class ContainerItem extends Component {
  componentDidMount() {
    let { dispatch, id, firebase } = this.props;

    dispatch(getItemIfNeeded(id, firebase))
  }

  render() {
    let { isLoading, isError, item } = this.props;

    return (
      <Fragment>
        {isLoading && (
          <Card title='Loading...' time={new Date() / 1000} />
        )}

        {isError && (
          <Card title='Error' message={isError} />
        )}

        {item && (
          <Card><Article {...item} /></Card>
        )}
      </Fragment>
    )
  }
}

ContainerItem.propTypes = {
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  item: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  let { itemsCache } = state;
  let { id } = ownProps;
  let { isLoading, isError, item } = itemsCache[id] || INITIAL_STATE_ITEM;
  return { isLoading, isError, item }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerItem)
