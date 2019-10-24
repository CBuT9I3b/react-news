import React from 'react'

const ServiceMessage = ({ title, message }) => (
  <article>
    {title && <h6><b>{title}</b></h6>}

    {message && <p>{message}</p>}
  </article>
);

export default ServiceMessage
