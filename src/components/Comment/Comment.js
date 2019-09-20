import React from 'react'

import './Comment.sass'

import { withItem } from '../../hocs'

import { Article, PreloaderAndMessage } from '..'

const Comment = ({ index, isLoading, item }) => (
  <>
    {isLoading && index === 0 && (
      <PreloaderAndMessage message='Comments are loading...' />
    )}

    {item && (
      <div className='comment'>
        <Article {...item} />
      </div>
    )}
  </>
);

export default withItem(Comment)
