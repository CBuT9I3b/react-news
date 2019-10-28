import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

import { withItem } from '../../hocs'

import { PreloaderAndMessage, ServiceMessage } from '..'

const ListItemContent = ({ id, title, time, by, score, descendants }) => (
  <>
    {title && (
      <h6>
        <Link
          to={{
            pathname: `/item/${id}`,
            state: { modal: true }
          }}
          className='hn--link'
        >
          <b>{title}</b>
        </Link>
      </h6>
    )}

    {!!(score || by || time || descendants) && (
      <p>
        {!!score && `${score} points `}

        {by && (
          <>by <Link to={`/user/${by}`} className='hn--link'>{by}</Link> </>
        )}

        {time && <TimeAgo date={(time * 1000)} />}

        {!!descendants && ` ${descendants} comments`}
      </p>
    )}
  </>
);

const ListItem = ({ isLoading, isError, item }) => (
  <article>
    {isError && (
      <ServiceMessage title='Error' message={isError} />
    )}

    {item && (
      <ListItemContent {...item} />
    )}

    {!isLoading && !isError && !item && (
      <ServiceMessage title='Error' message='Oops...' />
    )}
  </article>
);

export default withItem(ListItem)
