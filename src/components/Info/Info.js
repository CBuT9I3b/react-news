import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

const Info = ({ title, message, time, by, score, descendants }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    {!!(time || by || score || descendants) && (
      <p>
        {score && `${score} points `}

        {by && `by ${by} `}

        {time && <TimeAgo date={(time * 1000)} />}

        {descendants !== 0 && ` ${descendants} comments`}
      </p>
    )}

    {message && <p>{message}</p>}
  </Fragment>
);

export default Info
