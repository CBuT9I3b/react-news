import React from 'react'

import ListItem from './ListItem'

const ListItems = ({ ids }) => (
  ids.map(id => <ListItem key={id} id={id} />)
);

export default ListItems
