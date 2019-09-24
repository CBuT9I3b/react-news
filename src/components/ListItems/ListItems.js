import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Item } from '..'

const MemoItem = memo(props => (
  <Link
    to={{
      pathname: `/item/${props.id}`,
      state: { modal: true }
    }}
    className='black-text'
  >
    <Item mini id={props.id} />
  </Link>
));

const ListItems = ({ ids }) => (
  ids.map(id => <MemoItem key={id} id={id} />)
);

export default ListItems
