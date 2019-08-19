import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

const Info = ({ title, message, time, type, by, score, kids }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    <p>
      {type && by && `${type} by ${by} `}

      {score && `${score} points `}

      {kids && `${kids.length} comments `}

      {time && <TimeAgo date={(time * 1000)} />}
    </p>

    {message && <p>{message}</p>}
  </Fragment>
);

export default Info
