import React from 'react'

const Card = ({ title, time, message }) => (
  <div className='card hoverable blue-grey lighten-5'>
    <div className='card-content'>
      {title && <span className='card-title'>{title}</span>}

      {message && <p>{message}</p>}

      {time && <small>{new Date(time * 1000).toLocaleString()}</small>}
    </div>
  </div>
);

export default Card
