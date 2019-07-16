import React, { Component, Fragment } from 'react'

import { withFirebase } from '../services'

import { Card, Article } from '../components'

class ContainerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isLoading: false,
      isError: false
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

    this.setState({ isLoading: true });
    firebase.getItem(id)
      .then(item => this.setState({ item: item, isLoading: false }))
      .catch(error => this.setState({ isLoading: false, isError: error }))
  };

  render() {
    let { item, isLoading, isError } = this.state;

    return (
      <Fragment>
        {isLoading && <Card title='Loading...' time={new Date() / 1000} />}

        {isError && <Card title='Error' message={isError} />}

        {item && <Card><Article {...item} /></Card>}
      </Fragment>
    )
  }
}

export default withFirebase(ContainerItem)
