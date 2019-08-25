import React, { Fragment } from 'react'

import { withItem } from '../../hocs'

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

    {!isLoading && !isError && !item && (
      <Info title='Error' message='Oops...' />
    )}
  </Fragment>
);

export default withItem(Item)
