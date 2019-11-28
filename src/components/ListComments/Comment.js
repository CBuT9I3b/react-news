import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

import { withItem } from '../../hocs'

import { ListComments, PreloaderForText } from '..'

const CommentContent = ({ by, time, text, kids, deleted }) => (
  <>
    {!!(by || time) && (
      <p>
        {by && (
          <>by <Link to={`/user/${by}`} className='hn--link'>{by}</Link> </>
        )}

        {time && <TimeAgo date={(time * 1000)} />}
      </p>
    )}

    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

    {deleted && <p className='grey-text'><i>Item is deleted</i></p>}

    {kids && <ListComments ids={kids} />}
  </>
);

const Comment = ({ index, isLoading, item }) => (
  <li>
    {isLoading && index === 0 && (
      <PreloaderForText />
    )}

    {item && (
      <div className='comment'>
        <CommentContent {...item} />
      </div>
    )}
  </li>
);

export default withItem(Comment)
