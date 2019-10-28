import React  from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

import { withItem } from '../../hocs'

import { ServiceMessage, PreloaderAndMessage, ListComments } from '..'

import { setTitle } from '../../utils'

const ItemContent = ({ title, by, time, text, url, score, kids, deleted, descendants }) => {
  setTitle(title);
  return (
    <>
      {title && <h6><b>{title}</b></h6>}

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

      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

      {url && (
        <p><a href={url} target='_blank' rel='noreferrer noopener'>
          {url.split('/')[2]}
        </a></p>
      )}

      {deleted && <p className='grey-text'><i>Item is deleted</i></p>}

      {kids && <ListComments ids={kids} />}
    </>
  )
};

const Item = ({ isLoading, isError, item }) => (
  <article>
    {isLoading && (
      <PreloaderAndMessage message='Story is loading...' />
    )}

    {isError && (
      <ServiceMessage title='Error' message={isError} />
    )}

    {item && (
      <ItemContent {...item} />
    )}

    {!isLoading && !isError && !item && (
      <ServiceMessage title='Error' message='Oops...' />
    )}
  </article>
);

export default withItem(Item)
