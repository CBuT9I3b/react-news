import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Card } from '..'
import { ContainerListStories, ContainerModal } from '../../containers'

const List = ({ match }) => (
  <ContainerListStories type={match.params.type} />
);

class ModalSwitch extends Component {
  prevLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.prevLocation = location
    }
  }

  render() {
    let { location } = this.props;
    let isModal = !!(location.state && location.state.modal && this.prevLocation !== location);

    return (
      <Fragment>
        <Switch location={isModal ? this.prevLocation : location}>
          <Route exact path='/' render={() => <Redirect from='/' to='/new' />} />
          <Route path='/:type(new|top|best|ask|show|job)' component={List} />
          <Route path='/about' render={() => <Card title='About Us' message='About Us' />} />
          <Route path='/:id' render={() => <Card title='Error' message='Page Not Found' />} />
        </Switch>
        {isModal ? <Route path='/:id' component={ContainerModal} /> : null}
      </Fragment>
    )
  }
}

const Routes = () => (
  <Route component={ModalSwitch} />
);

export default Routes
