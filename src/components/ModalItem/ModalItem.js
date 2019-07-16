import React, { Fragment } from 'react'

import { Article } from '..'

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

const ModalItem = ({ onBack, item }) => (
  <Fragment>
    <div onClick={onBack} style={styleOverlay} className='modal-overlay' />
    <div style={styleModal} className='modal'>
      <div className='modal-content'>
        <Article
          {...item}
        />
      </div>
      <div className='modal-footer'>
        <button onClick={onBack} className='btn-flat waves-effect waves-red'>Close</button>
      </div>
    </div>
  </Fragment>
);

export default ModalItem
