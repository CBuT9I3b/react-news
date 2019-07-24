import React, { Fragment } from 'react'

const Info = ({ title, time, message }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    {message && <p>{message}</p>}

    {time && <small>{new Date(time * 1000).toLocaleString()}</small>}
  </Fragment>
);

export default Info
