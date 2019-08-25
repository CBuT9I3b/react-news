import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

import { withItem } from '../../hocs'

import { ListComments } from '..'

const style = {
  paddingLeft: '20px',
  borderLeft: '1px solid #b0bec5',
  borderTop: '1px solid #b0bec5'
};

const Comment = ({ index, isLoading, item }) => (
  <Fragment>
    {isLoading && index === 0 && (
      <p>Comments are loading...</p>
    )}

    {item && (
      <div style={style}>
        <p>
          {item.type && item.by && `${item.type} by ${item.by} `}

          {item.time && <TimeAgo date={(item.time * 1000)} />}
        </p>

        {item.text && <p dangerouslySetInnerHTML={{ __html: item.text }} />}

        {item.kids && <ListComments ids={item.kids} />}
      </div>
    )}
  </Fragment>
);

export default withItem(Comment)
