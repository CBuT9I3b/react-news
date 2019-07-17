import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { INITIAL_STATE } from '../constants'

import { withFirebase } from '../services'
import { selectTypeContent, asyncGetContent, getContentIfNeeded } from '../actions'

import { Card, ListItems, Preloader } from '../components'

class ContainerListItems extends Component {
  addNextPage = () => {
    let { firebase, dispatch, selectedType, page } = this.props;

    dispatch(asyncGetContent(selectedType, page + 1, firebase))
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

  componentDidMount() {
    let { firebase, dispatch, type, selectedType, page } = this.props;

    window.addEventListener('scroll', this.handleScroll);

    if (type !== selectedType) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType) {
      dispatch(getContentIfNeeded(selectedType, page, firebase))
    }
  }

  componentDidUpdate(prevProps) {
    let { firebase, dispatch, type, selectedType, page } = this.props;

    if (type !== prevProps.type) {
      dispatch(selectTypeContent(type))
    }
    if (selectedType !== prevProps.selectedType) {
      dispatch(getContentIfNeeded(selectedType, page, firebase))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

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
        {!items && !isLoading && (
          <Card title='Error' message='No Stories' />
        )}
        {!items && isLoading && (
          <Card title='Loading...' time={new Date() / 1000} />
        )}
        {items && isLoading && (
          <Preloader />
        )}
        {isError && (
          <Card title='Error' message={isError} />
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
  selectedType: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  items: PropTypes.array,
  page: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  let { selectedType, content } = state;
  let { isLoading, isError, items, page } =
    content[selectedType] || INITIAL_STATE;
  return { selectedType, isLoading, isError, items, page }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerListItems)
