import React from 'react'

import { Card, Modal } from '..'

const ListStories = ({ items }) => (
  items.map(item => item && (
    <Modal
      {...item}
      key={item.id}
      trigger={<Card {...item} />}
    />
  ))
);

export default ListStories
