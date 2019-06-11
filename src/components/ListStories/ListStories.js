import React from 'react'

import { Card } from '..'

const ListStories = ({ items }) => (
  items.map(item => item && <Card {...item} key={item.id} />)
);

export default ListStories
