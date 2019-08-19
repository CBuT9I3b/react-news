import React from 'react'

import { Comment } from '..'

const ListComments = ({ ids }) => (
  <div>
    {ids.map(id => id && <Comment key={id} id={id} />)}
  </div>
);

export default ListComments
