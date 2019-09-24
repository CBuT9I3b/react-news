import React from 'react'
import TimeAgo from 'react-timeago'

const Info = ({ title, message, time, by, score, descendants }) => (
  <article>
    {title && <h6><b>{title}</b></h6>}

    {!!(time || by || score || descendants) && (
      <p>
        {!!score && `${score} points `}

        {by && `by ${by} `}

        {time && <TimeAgo date={(time * 1000)} />}

        {!!descendants && ` ${descendants} comments`}
      </p>
    )}

    {message && <p>{message}</p>}
  </article>
);

export default Info
