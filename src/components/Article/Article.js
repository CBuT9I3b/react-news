import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

import { ListComments } from '..'

const Article = ({ title, type, by, time, text, url, score, kids }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    <p>
      {type && by && `${type} by ${by} `}

      {time && <TimeAgo date={(time * 1000)} />}
    </p>

    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

    {url && (
      <p><a href={url} target='_blank' rel='noreferrer noopener'>
        {url.split('/')[2]}
      </a></p>
    )}

    <p>
      {score && `${score} points `}

      {kids && `${kids.length} comments`}
    </p>

    {kids && <ListComments ids={kids} />}
  </Fragment>
);

export default Article
