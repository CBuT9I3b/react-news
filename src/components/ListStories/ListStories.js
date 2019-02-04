import React from 'react'

import { Card } from '..'

const ListStories = ({ data, addNextPage }) => {
  const { isLoading, isError, items } = data;
  if (isError) {
    return <Card data={{title: 'Error', text: isError}} />
  }
  if (items.length !== 0) {
    return (
      <div>
        {items.map(item => item && <Card data={item} key={item.id} />)}
        <div className='col l12 m12 s12'>
          <button
            onClick={addNextPage}
            className="waves-effect waves-light btn"
          >More Hacker News</button>
        </div>
      </div>
    )
  }
  if (isLoading) {
    return <Card data={{text: 'Loading...'}} />
  }
  return <Card data={({title: 'Error', text: 'No Stories'})} />
};

export default ListStories
