import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '..'

const ListStories = ({ items }) => (
  items.map(item => item && (
    <Link
      key={item.id}
      to={{
        pathname: `/${item.id}`,
        state: { modal: true }
      }}
      className='black-text'
    >
      <Card {...item} />
    </Link>
  ))
);

export default ListStories
