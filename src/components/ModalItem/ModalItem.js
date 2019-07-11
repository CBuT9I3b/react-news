import React, { Fragment } from 'react'

const styleOverlay = {
  zIndex: '1002',
  display: 'block',
  opacity: '0.5'
};

const styleModal = {
  zIndex: '1003',
  display: 'block',
  opacity: '1',
  top: '10%'
};

const ModalItem = ({ onBack, title, type, by, time, text, url, score, kids }) => (
  <Fragment>
    <div onClick={onBack} style={styleOverlay} className='modal-overlay' />
    <div style={styleModal} className='modal'>
      <div className='modal-content'>
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
      <div className='modal-footer'>
        <button onClick={onBack} className='btn-flat waves-effect waves-red'>Close</button>
      </div>
    </div>
  </Fragment>
);

export default ModalItem
