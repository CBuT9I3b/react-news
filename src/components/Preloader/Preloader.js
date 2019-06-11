import React from 'react'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center'
};

const Preloader = () => (
  <div style={style}>
    <div className='preloader-wrapper active'>
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
  </div>
);

export default Preloader
