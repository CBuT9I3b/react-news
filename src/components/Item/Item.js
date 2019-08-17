import React, { Fragment } from 'react'

import { Article, Info } from '..'

const Item = ({ isLoading, isError, item, mini }) => (
  <Fragment>
    {isLoading && (
      <Info title='Loading' message='Story is loading...' />
    )}

    {isError && (
      <Info title='Error' message={isError} />
    )}

    {item && mini && (
      <Info {...item} />
    )}

    {item && !mini && (
      <Article {...item} />
    )}
  </Fragment>
);

export default Item
