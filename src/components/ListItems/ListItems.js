import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Card } from '..'

const MemoItem = memo(props => (
  <Link
    to={{
      pathname: `/${props.id}`,
      state: { modal: true }
    }}
    className='black-text'
  >
    <Card info {...props} />
  </Link>
));

const ListItems = ({ items }) => (
  items.map(item => item && <MemoItem key={item.id} {...item} />)
);

export default ListItems
