import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { withCard } from '../../hocs'

import { Item } from '..'

const CardItem = withCard(Item);

const MemoItem = memo(props => (
  <Link
    to={{
      pathname: `/item/${props.id}`,
      state: { modal: true }
    }}
    className='black-text'
  >
    <CardItem mini id={props.id} />
  </Link>
));

const ListItems = ({ ids }) => (
  ids.map(id => <MemoItem key={id} id={id} />)
);

export default ListItems
