import React, { Component } from 'react'
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

const mapStateToProps = (state, ownProps) => {
  let { content } = state;
  let { id } = ownProps;
  let item = null;

  Object.keys(content).forEach(typeContent => {
    let searchResult = content[typeContent].items.find(item => item.id === +id);
    if (searchResult) {
      item = searchResult
    }
  });

  return { item }
};

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ContainerModalItem)
