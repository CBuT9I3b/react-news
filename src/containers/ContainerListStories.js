import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectTypeContent, getContentIfNeeded } from '../actions'
import { ListStories } from '../components'

class ContainerListStories extends Component {
  componentDidMount() {
    const { dispatch, type, selectedType, user } = this.props;
    if (selectedType !== type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType) {
      dispatch(getContentIfNeeded(selectedType, user))
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, type, selectedType, user } = this.props;
    if (type !== prevProps.type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType !== prevProps.selectedType) {
      dispatch(getContentIfNeeded(selectedType, user))
    }
  }

  render() {
    const { isLoading, isError, items } = this.props;
    return (
      <ListStories data={{ isLoading, isError, items }} />
    )
  }
}

ContainerListStories.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { selectedType, content, user } = state;
  const { isLoading, isError, items } = content[selectedType] || { isLoading: false, isError: false, items: [] };
  return { isLoading, isError, items, selectedType, user }
};

export default connect(mapStateToProps)(ContainerListStories)
