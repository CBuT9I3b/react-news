import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Card } from '..'
import { ContainerListItems, ContainerItem, ContainerModalItem } from '../../containers'

const about = 'Mini hacker news clone implemented on react.js and redux.';

const ListItems = ({ match }) => (
  <ContainerListItems type={match.params.type} />
);

const Item = ({ match }) => (
  <ContainerItem id={match.params.id} />
);

const ModalItem = ({ match, history }) => (
  <ContainerModalItem id={match.params.id} history={history} />
);

class ModalSwitch extends Component {
  prevLocation = this.props.location;

  componentDidUpdate() {
    let { history, location } = this.props;

    if (history.action !== 'POP' && (!location.state || !location.state.modal)) {
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
          <Route path='/:type(new|top|best|ask|show|job)' component={ListItems} />
          <Route path='/about' render={() => <Card info title='About Us' message={about} />} />
          <Route path='/:id' component={Item} />
        </Switch>
        {isModal ? <Route path='/:id' component={ModalItem} /> : null}
      </Fragment>
    )
  }
}

const Routes = () => (
  <Route component={ModalSwitch} />
);

export default Routes
