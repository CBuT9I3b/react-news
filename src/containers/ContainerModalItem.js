import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_ITEM } from "../constants";

import { withFirebase } from '../services'
import { getItemIfNeeded } from '../actions'

import { ModalItem } from '../components'

class ContainerModalItem extends Component {
  componentWillMount() {
    document.body.style.overflowY = 'hidden'
  }

  componentDidMount() {
    let { dispatch, id, firebase } = this.props;

    dispatch(getItemIfNeeded(id, firebase))
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'scroll'
  }

  onBack = event => {
    let { history } = this.props;
    event.stopPropagation();
    history.goBack()
  };

  render() {
    let { isLoading, isError, item } = this.props;

    return (
      <ModalItem
        isLoading={isLoading}
        isError={isError}
        item={item}
        onBack={this.onBack}
      />
    )
  }
}
ContainerModalItem.propTypes = {
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
)(ContainerModalItem)
