import React from 'react'

import { withUser } from '../../hocs'
import { ServiceMessage, PreloaderAndMessage } from '..'

import { setTitle } from '../../utils'

const UserContent = ({ id, created, karma, about, submitted }) => {
  setTitle(id);
  return (
    <>
      {id && <h6>User: <b>{id}</b></h6>}

      {created && <p>Created: {new Date(created * 1000).toLocaleDateString()}</p>}

      {karma && <p>Karma: {karma}</p>}

      {about && <p dangerouslySetInnerHTML={{ __html: about }} />}

      {submitted && <p>Submitted: {submitted.length}</p>}
    </>
  )
};

const User = ({ isLoading, isError, user }) => (
  <article>
    {isLoading && (
      <PreloaderAndMessage message='User information is loading...' />
    )}

    {isError && (
      <ServiceMessage title='Error' message={isError} />
    )}

    {user && (
      <UserContent {...user} />
    )}

    {!isLoading && !isError && !user && (
      <ServiceMessage title='Error' message='Oops...' />
    )}
  </article>
);

export default withUser(User)
