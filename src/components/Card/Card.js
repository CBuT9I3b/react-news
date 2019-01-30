import React from 'react'

const Card = props => {
  const { by, time, title, type, url, text } = props.data;
  return (
    <div className='col l12 m12 s12'>
      <div className='card hoverable blue-grey lighten-5'>
        <div className='card-content'>
          {title &&
            <span className='card-title'>
              {title}
            </span>
          }
          {type && by &&
            <p>{type} by {by}</p>
          }
          {text &&
            <p dangerouslySetInnerHTML={{__html: text}} />
          }
          {time &&
            <small>{new Date((time * 1000)).toLocaleString()}</small>
          }
        </div>
        {url &&
          <div className='card-action'>
            <a href={url} target='_blank' rel='noreferrer noopener'>
              {url.split('/')[2]}
            </a>
          </div>
        }
      </div>
    </div>
  )
};

export default Card
