import React, { Component } from 'react'

import { withFirebase } from '../services'

import { Item } from '../components'

class ContainerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }

  componentDidMount() {
    let { id } = this.props;
    let { item } = this.state;

    if (!item) {
      this.getItem(id)
    }
  }

  componentDidUpdate(prevProps) {
    let { id } = this.props;

    if (id !== prevProps.id) {
      this.getItem(id)
    }
  }

  getItem = id => {
    let { firebase } = this.props;

    firebase.getItem(id)
      .then(item => (
        this.setState({ item: item })
      ))
  };

  render() {
    let { item } = this.state;

    return (
      item ? <Item {...item} /> : null
    )
  }
}

export default withFirebase(ContainerItem)
