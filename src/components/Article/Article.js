import React from 'react'

const Article = props => {
  const { by, time, title, type, url, text } = props.data;

  const titleCard = title &&
    <span className='card-title'>{title}</span>;

  const typeAndAuthor = type && by &&
    <p>{type} by {by}</p>;

  const textCard = text &&
    <p dangerouslySetInnerHTML={{__html: text}} />;

  const date = time &&
    <small>{new Date((time * 1000)).toLocaleString()}</small>;

  const link = url &&
    <div className='card-action'>
      <a href={url} target='_blank' rel='noreferrer noopener'>{url.split('/')[2]}</a>
    </div>;

  return (
    <div className='col l12 m12 s12'>
      <div className='card hoverable blue-grey lighten-5'>
        <div className='card-content'>
          {titleCard}
          {typeAndAuthor}
          {textCard}
          {date}
        </div>
        {link}
      </div>
    </div>
  )
};

export default Article
