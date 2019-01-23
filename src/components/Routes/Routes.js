import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AboutUs, NotFound, SignIn, SignUp } from '..'
import { ContainerListStories } from '../../containers'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <Redirect from='/' to='/new' />
    )} />
    <Route path='/sign_in' component={SignIn} />
    <Route path='/sign_up' component={SignUp} />
    <Route path='/about' component={AboutUs} />
    <Route path='/:type(new|top|best|ask|show|job|fav)' component={List} />
    <Route path='*' component={NotFound} />
  </Switch>
);

const List = ({ match }) => (
  <ContainerListStories type={match.params.type} />
);

export default Routes
