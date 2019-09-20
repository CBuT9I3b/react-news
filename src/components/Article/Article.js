import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

import { ListComments } from '..'

const Article = ({ title, by, time, text, url, score, kids, deleted, descendants }) => (
  <>
    {title && <h6><b>{title}</b></h6>}

    {!!(score || by || time || descendants) && (
      <p>
        {score !== 0 && `${score} points `}

        {by && (
          <>by <Link to={`/user/${by}`}>{by}</Link> </>
        )}

        {time && <TimeAgo date={(time * 1000)} />}

        {descendants !== 0 && ` ${descendants} comments`}
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
);

export default Article
