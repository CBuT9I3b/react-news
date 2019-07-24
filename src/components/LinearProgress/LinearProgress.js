import React from 'react'

const style = {
  position: 'fixed',
  margin: '0 0 0 0',
  zIndex: '1004'
};

const LinearProgress = () => (
  <div style={style} className='progress red lighten-4'>
    <div className='indeterminate red' />
  </div>
);

export default LinearProgress
