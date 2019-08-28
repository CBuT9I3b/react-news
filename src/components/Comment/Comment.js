import React, { Fragment } from 'react'

import { withItem } from '../../hocs'

import { Article, PreloaderAndMessage } from '..'

const style = {
  paddingLeft: '20px',
  borderLeft: '1px solid #b0bec5',
  borderTop: '1px solid #b0bec5'
};

const Comment = ({ index, isLoading, item }) => (
  <Fragment>
    {isLoading && index === 0 && (
      <PreloaderAndMessage message='Comments are loading...' />
    )}

    {item && (
      <div style={style}>
        <Article {...item} />
      </div>
    )}
  </Fragment>
);

export default withItem(Comment)
