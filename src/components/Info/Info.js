import React, { Fragment } from 'react'

const Info = ({ title, message, time, type, by, score, kids }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    <p>
      {time && `${new Date((time * 1000)).toLocaleString()} `}

      {type && by && `${type} by ${by} `}

      {score && `${score} points `}

      {kids && `${kids.length} comments`}
    </p>

    {message && <p>{message}</p>}
  </Fragment>
);

export default Info
