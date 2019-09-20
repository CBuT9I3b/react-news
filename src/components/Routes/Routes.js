import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { withCard } from '../../hocs'

import { ContainerListItems } from '../../containers'
import { Info, Item, ModalItem, User } from '..'

const about = 'Mini hacker news clone implemented on react.js and redux.js';

const ListItemsPage = ({ match }) => (
  <ContainerListItems type={match.params.type} />
);

const CardInfo = withCard(Info);

const CardItem = withCard(Item);

const ItemPage = ({ match }) => (
  <CardItem id={match.params.id} />
);

const ModalItemPage = ({ match, history }) => (
  <ModalItem id={match.params.id} history={history} />
);

const UserPage = ({ match }) => (
  <User id={match.params.id} />
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
      <>
        <Switch location={isModal ? this.prevLocation : location}>
          <Route exact path='/' render={() => <Redirect from='/' to='/new' />} />
          <Route path='/:type(new|top|best|ask|show|job)' component={ListItemsPage} />
          <Route path='/about' render={() => <CardInfo title='About Us' message={about} />} />
          <Route path='/item/:id' component={ItemPage} />
          <Route path='/user/:id' component={UserPage} />
        </Switch>
        {isModal ? <Route path='/item/:id' component={ModalItemPage} /> : null}
      </>
    )
  }
}

const Routes = () => (
  <Route component={ModalSwitch} />
);

export default Routes
