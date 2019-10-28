import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE_USER } from '../constants'

import { withFirebase } from '../services'
import { getUserIfNeeded } from '../actions'

const withUser = Component => {
  class WithUser extends React.Component {
    componentDidMount() {
      let { dispatch, firebase, id } = this.props;

      dispatch(getUserIfNeeded(firebase, id))
    }

    componentDidUpdate(prevProps) {
      let { dispatch, firebase, id } = this.props;

      if (id !== prevProps.id) {
        dispatch(getUserIfNeeded(firebase, id))
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  WithUser.propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    user: PropTypes.object,
  };

  const mapStateToProps = (state, ownProps) => {
    let { usersCache } = state;
    let { id } = ownProps;
    let { isLoading, isError, user } = usersCache[id] || INITIAL_STATE_USER;
    return { isLoading, isError, user }
  };

  return compose(
    withFirebase,
    connect(mapStateToProps)
  )(WithUser)
};

export default withUser
