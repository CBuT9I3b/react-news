import React from 'react'

import { Card } from '..'

const ListStories = props => {
  const { isLoading, isError, items } = props.data;
  if (isLoading) {
    return <Card data={{text: 'Loading...'}} />
  }
  if (isError) {
    return <Card data={{title: 'Error', text: isError}} />
  }
  if (items.length !== 0) {
    return items.map(item => item ? <Card data={item} key={item.id} /> : null)
  } else {
    return <Card data={({title: 'Error', text: 'No Stories'})} />
  }
};

export default ListStories
