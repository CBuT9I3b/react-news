import React, { Fragment } from 'react'

const Article = ({ title, type, by, time, text, url, score, kids }) => (
  <Fragment>
    {title && <h6><b>{title}</b></h6>}

    <p>
      {time && `${new Date((time * 1000)).toLocaleString()} `}

      {type && by && `${type} by ${by}`}
    </p>

    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}

    {url && (
      <p><a href={url} target='_blank' rel='noreferrer noopener'>
        {url.split('/')[2]}
      </a></p>
    )}

    <p>
      {score && `${score} points `}

      {kids && `${kids.length} comments`}
    </p>
  </Fragment>
);

export default Article
