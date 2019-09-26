import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { ContainerListItems } from '../../containers'
import { Info, Item, ModalItem, User } from '..'

const about = 'Mini hacker news clone implemented on react.js and redux.js';

const ListItemsPage = ({ match }) => (
  <ContainerListItems type={match.params.type} />
);

const ItemPage = ({ match }) => (
  <Item id={match.params.id} />
);

const ModalItemPage = ({ match, history }) => (
  <ModalItem id={match.params.id} history={history} />
);

const UserPage = ({ match }) => (
  <User id={match.params.id} />
);

class ModalSwitch extends Component {
  constructor(props) {
    super(props);
    this.prevLocation = this.props.location;
    this.isMediumAndDownScreen = window.innerWidth <= 992
  }

  componentDidMount() {
    window.addEventListener('resize', this.onListenerResize)
  }

  componentDidUpdate() {
    let { history, location } = this.props;

    if (history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.prevLocation = location
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onListenerResize)
  }

  onListenerResize = () => this.isMediumAndDownScreen = window.innerWidth <= 992;

  render() {
    let { location } = this.props;
    let isModal = !!(
      !this.isMediumAndDownScreen && location.state && location.state.modal && this.prevLocation !== location
    );

    return (
      <>
        <Switch location={isModal ? this.prevLocation : location}>
          <Route exact path='/' render={() => <Redirect from='/' to='/new' />} />
          <Route path='/:type(new|top|best|ask|show|job)' component={ListItemsPage} />
          <Route path='/about' render={() => <Info title='About Us' message={about} />} />
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
