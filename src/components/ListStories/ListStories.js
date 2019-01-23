import React from 'react'

import { Article } from '..'

const ListStories = props => {
  const { isLoading, isError, items } = props.data;
  if (isLoading) {
    return <Article data={{text: 'Loading...'}} />
  }
  if (isError) {
    return <Article data={{title: 'Error', text: isError}} />
  }
  if (items.length !== 0) {
    return items.map(item => item ? <Article data={item} key={item.id} /> : null)
  }
  return null
};

export default ListStories
