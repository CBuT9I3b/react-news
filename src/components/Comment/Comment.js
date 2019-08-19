import React, { Fragment } from 'react'
import TimeAgo from 'react-timeago'

import { withItem } from '../../hocs'

import { ListComments } from '..'

const style = {
  paddingLeft: '20px',
  borderLeft: '1px solid #b0bec5',
  borderTop: '1px solid #b0bec5'
};

const Comment = ({ item }) => (
  <div style={style}>
    {item && (
      <Fragment>
        <p>
          {item.type && item.by && `${item.type} by ${item.by} `}

          {item.time && <TimeAgo date={(item.time * 1000)} />}
        </p>

        {item.text && <p dangerouslySetInnerHTML={{ __html: item.text }} />}

        {item.kids && <ListComments ids={item.kids} />}
      </Fragment>
    )}
  </div>
);

export default withItem(Comment)
