import React from 'react'

export const Preloader = () => (
  <div className='preloader-wrapper small active'>
    <div className='spinner-layer spinner-red-only'>
      <div className='circle-clipper left'>
        <div className='circle' />
      </div>
      <div className='gap-patch'>
        <div className='circle' />
      </div>
      <div className='circle-clipper right'>
        <div className='circle' />
      </div>
    </div>
  </div>
);

const style = {
  paddingLeft: '24px'
};

export const PreloaderAndMessage = ({ message }) => (
  <div className='valign-wrapper'>
    <Preloader />
    <div style={style}>
      <p>{message}</p>
    </div>
  </div>
);
