import React from 'react'

const Item = ({ title, type, by, time, text, url, score, kids }) => (
  <div className='card-panel'>
    {title && <h5>{title}</h5>}

    <p>
      {type && by && `${type} by ${by} | `}

      {time && new Date((time * 1000)).toLocaleString()}
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
  </div>
);

export default Item
