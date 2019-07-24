import React from 'react'

import { Info } from '..'

const Card = ({ children, title, time, message }) => (
  <div className='card-panel'>
    {children || <Info title={title} time={time} message={message} />}
  </div>
);

export default Card
