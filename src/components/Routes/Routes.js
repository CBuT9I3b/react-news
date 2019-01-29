import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { AboutUs, NotFound } from '..'
import { ContainerListStories } from '../../containers'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <Redirect from='/' to='/new' />
    )} />
    <Route path='/about' component={AboutUs} />
    <Route path='/:type(new|top|best|ask|show|job)' component={List} />
    <Route path='*' component={NotFound} />
  </Switch>
);

const List = ({ match }) => (
  <ContainerListStories type={match.params.type} />
);

export default Routes
