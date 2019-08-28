import React, { Fragment } from 'react'
import { compose } from 'redux'

import { withCard, withUser } from '../../hocs'
import { Info, PreloaderAndMessage } from '..'

const User = ({ isLoading, isError, user }) => (
  <Fragment>
    {isLoading && (
      <PreloaderAndMessage message='User information is loading...' />
    )}

    {isError && (
      <Info title='Error' message={isError} />
    )}

    {user && (
      <Fragment>
        {user.id && <h6>Username: <b>{user.id}</b></h6>}

        {user.created && <p>Date of Creation: {new Date(user.created * 1000).toLocaleString()}</p>}

        {user.karma && <p>Karma: {user.karma}</p>}

        {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}

        {user.submitted && <p>Submitted: {user.submitted.length}</p>}
      </Fragment>
    )}

    {!isLoading && !isError && !user && (
      <Info title='Error' message='Oops...' />
    )}
  </Fragment>
);

export default compose(
  withCard,
  withUser
)(User)
