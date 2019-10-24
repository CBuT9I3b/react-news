import React from 'react'

import Comment from './Comment'

const ListComments = ({ ids }) => (
  <section>
    {ids.map((id, index) => id && <Comment key={id} id={id} index={index} />)}
  </section>
);

export default ListComments
