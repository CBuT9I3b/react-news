import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

const Info = ({ title, message, time, by, score, kids }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    {!!(time || by || score || kids) && (
      <p>
        {score && `${score} points `}

        {by && `by ${by} `}

        {time && <TimeAgo date={(time * 1000)} />}

        {kids && ` ${kids.length} comments`}
      </p>
    )}

    {message && <p>{message}</p>}
  </Fragment>
);

export default Info
