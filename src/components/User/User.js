import React from 'react'
import { compose } from 'redux'

import { withCard, withUser } from '../../hocs'
import { Info, PreloaderAndMessage } from '..'

const User = ({ isLoading, isError, user }) => (
  <>
    {isLoading && (
      <PreloaderAndMessage message='User information is loading...' />
    )}

    {isError && (
      <Info title='Error' message={isError} />
    )}

    {user && (
      <>
        {user.id && <h6>User: <b>{user.id}</b></h6>}

        {user.created && <p>Created: {new Date(user.created * 1000).toLocaleDateString()}</p>}

        {user.karma && <p>Karma: {user.karma}</p>}

        {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}

        {user.submitted && <p>Submitted: {user.submitted.length}</p>}
      </>
    )}

    {!isLoading && !isError && !user && (
      <Info title='Error' message='Oops...' />
    )}
  </>
);

export default compose(
  withCard,
  withUser
)(User)
