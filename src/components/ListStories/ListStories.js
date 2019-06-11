import React from 'react'

import { Card } from '..'

const ListStories = ({ data }) => {
  const { isLoading, isError, items } = data;
  if (isError) {
    return <Card data={{ title: 'Error', text: isError }} />
  }
  if (items.length !== 0) {
    return [
      items.map(item => item && <Card data={item} key={item.id} />)
    ]
  }
  if (isLoading) {
    return <Card data={{ text: 'Loading...' }} />
  }
  return <Card data={({ title: 'Error', text: 'No Stories' })} />
};

export default ListStories
