import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Card } from '..'
import { ContainerListStories } from '../../containers'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => <Redirect from='/' to='/new' />} />
    <Route path='/:type(new|top|best|ask|show|job)' component={List} />
    <Route path='/about' render={() => <Card title='About Us' message='About Us' />} />
    <Route path='*' render={() => <Card title='Error' message='Page Not Found' />} />
  </Switch>
);

const List = ({ match }) => (
  <ContainerListStories type={match.params.type} />
);

export default Routes
