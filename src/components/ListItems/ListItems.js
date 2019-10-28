import React from 'react'

import ListItem from './ListItem'

const ListItems = ({ ids }) => (
  <ul className='list--items'>
    {ids.map(id => <ListItem key={id} id={id} />)}
  </ul>
);

export default ListItems
