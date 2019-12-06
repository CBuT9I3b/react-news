import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_ITEM } from '../constants'

import { withFirebase } from '../services'
import { getItemIfNeeded } from '../actions'

const withItem = Component => {
  class WithItem extends React.Component {
    componentDidMount() {
      let { dispatch, firebase, id } = this.props;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dispatch(getItemIfNeeded(firebase, id));
            observer.disconnect()
          }
        }
      );

      observer.observe(this._ref)
    }

    componentDidUpdate(prevProps) {
      let { dispatch, firebase, id } = this.props;

      if (id !== prevProps.id) {
        dispatch(getItemIfNeeded(firebase, id))
      }
    }

    render() {
      return <Component refForIntersection={ element => this._ref = element }  {...this.props} />
    }
  }

  WithItem.propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
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

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(WithItem)
};

export default withItem
