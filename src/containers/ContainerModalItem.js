import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withFirebase } from '../services'

import { ModalItem } from '../components'

class ContainerModalItem extends Component {
  onBack = event => {
    let { history } = this.props;
    event.stopPropagation();
    history.goBack()
  };

  render() {
    let { foundItem } = this.props;

    return (
      <ModalItem
        {...foundItem}
        onBack={this.onBack}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { content } = state;
  let { id } = ownProps;
  let foundItem = null;

  Object.keys(content).forEach(typeContent => {
    let searchResult = content[typeContent].items.find(item => item.id === +id);
    if (searchResult) {
      foundItem = searchResult
    }
  });

  return { foundItem }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerModalItem)
