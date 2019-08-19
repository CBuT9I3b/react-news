import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { withCard } from '../../hocs'

import { ContainerListItems } from '../../containers'
import { Info, Item, ModalItem } from '..'

const about = 'Mini hacker news clone implemented on react.js and redux.js';

const CardInfo = withCard(Info);

const ListItemsPage = ({ match }) => (
  <ContainerListItems type={match.params.type} />
);

const CardItem = withCard(Item);

const ItemPage = ({ match }) => (
  <CardItem id={match.params.id} />
);

const ModalItemPage = ({ match, history }) => (
  <ModalItem id={match.params.id} history={history} />
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
          <Route path='/:type(new|top|best|ask|show|job)' component={ListItemsPage} />
          <Route path='/about' render={() => <CardInfo title='About Us' message={about} />} />
          <Route path='/:id' component={ItemPage} />
        </Switch>
        {isModal ? <Route path='/:id' component={ModalItemPage} /> : null}
      </Fragment>
    )
  }
}

const Routes = () => (
  <Route component={ModalSwitch} />
);

export default Routes
