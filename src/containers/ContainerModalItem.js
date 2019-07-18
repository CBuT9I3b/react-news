import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'

import { ModalItem } from '../components'

class ContainerModalItem extends Component {
  componentWillMount() {
    document.body.style.overflowY = 'hidden'
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
    let { item } = this.props;

    return (
      <ModalItem
        item={item}
        onBack={this.onBack}
      />
    )
  }
}

ContainerModalItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  let { selectedType, content } = state;
  let { id } = ownProps;
  let item = content[selectedType].items.find(item => +id === item.id);
  return { item }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerModalItem)
