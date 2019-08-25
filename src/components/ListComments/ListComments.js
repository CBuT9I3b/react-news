import React from 'react'

import { Comment } from '..'

const ListComments = ({ ids }) => (
  <div>
    {ids.map((id, index) => id && <Comment key={id} id={id} index={index} />)}
  </div>
);

export default ListComments
