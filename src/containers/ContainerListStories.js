import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withFirebase } from '../services'
import { selectTypeContent, getContentIfNeeded, asyncGetContent } from '../actions'
import { ListStories } from '../components'

class ContainerListStories extends Component {
  addNextPage = () => {
    const { firebase, dispatch, selectedType, page } = this.props;
    dispatch(asyncGetContent(selectedType, page + 1, firebase))
  };

  componentDidMount() {
    const { firebase, dispatch, type, selectedType, page } = this.props;
    if (selectedType !== type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType) {
      dispatch(getContentIfNeeded(selectedType, page, firebase))
    }
  }

  componentDidUpdate(prevProps) {
    const { firebase, dispatch, type, selectedType, page } = this.props;
    if (type !== prevProps.type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType !== prevProps.selectedType) {
      dispatch(getContentIfNeeded(selectedType, page, firebase))
    }
  }

  render() {
    const { isLoading, isError, items } = this.props;
    return (
      <Fragment>
        <ListStories data={{ isLoading, isError, items }} />
        <button
          onClick={this.addNextPage}
          className="waves-effect waves-light btn"
        >More Hacker News</button>
      </Fragment>
    )
  }
}

ContainerListStories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { selectedType, content } = state;
  const { isLoading, isError, items, page } =
    content[selectedType] || { isLoading: false, isError: false, items: [], page: 0 };
  return { selectedType, isLoading, isError, items, page }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerListStories)
