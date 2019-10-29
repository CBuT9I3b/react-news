import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { ContainerListItems } from '../../containers'
import { Item, ModalItem, User, AboutUs } from '..'

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
          <Route path='/:type(new|top|best|ask|show|job)' render={({ match }) => (
            <ContainerListItems type={match.params.type} />
          )} />
          <Route path='/about' component={AboutUs} />
          <Route path='/item/:id' render={({ match }) => <Item id={match.params.id} />} />
          <Route path='/user/:id' render={({ match }) => <User id={match.params.id} />} />
        </Switch>
        {isModal ? <Route path='/item/:id' render={({ match, history }) => (
          <ModalItem id={match.params.id} history={history} prevLocation={this.prevLocation} />
        )} /> : null}
      </>
    )
  }
}

const Routes = () => (
  <Route component={ModalSwitch} />
);

export default Routes
