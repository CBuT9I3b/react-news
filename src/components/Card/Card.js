import React from 'react'

const Card = ({ children, title, time, message }) => (
  <div className='card-panel'>
    {title && <h5>{title}</h5>}

    {message && <p>{message}</p>}

    {time && <small>{new Date(time * 1000).toLocaleString()}</small>}

    {!title && !message && !title && children}
  </div>
);

export default Card
