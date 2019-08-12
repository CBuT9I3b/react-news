import React from 'react'

import { Info, Article } from '..'

const Card = props => (
  <div className='card-panel'>
    {props.info ? <Info {...props} /> : <Article {...props} />}
  </div>
);

export default Card
