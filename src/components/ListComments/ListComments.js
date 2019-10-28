import React from 'react'

import Comment from './Comment'

const ListComments = ({ ids }) => (
  <ul className='list--items'>
    {ids.map((id, index) => id && <Comment key={id} id={id} index={index} />)}
  </ul>
);

export default ListComments
